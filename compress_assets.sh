#!/bin/bash

# Configuration
TARGET_BITRATE="1500k"
SCALE_FILTER="scale=1280:-2" # 720p width, preserve aspect ratio
ASSETS_DIR="src/assets"

# Function to compress video
compress_video() {
    local input="$1"
    local output="${input%.*}_compressed.mp4"
    local poster="${input%.*}_poster.jpg"
    
    # Check if input is a video (simple extension check)
    if [[ "$input" == *.mp4 ]]; then
        echo "Processing $input..."
        
        # 1. Generate Poster (First Frame)
        ffmpeg -y -i "$input" -vframes 1 -q:v 2 "$poster" 2>/dev/null
        echo "  -> Generated poster: $poster"

        # 2. Compress Video
        ffmpeg -y -i "$input" \
            -c:v libx264 -b:v $TARGET_BITRATE -preset slow \
            -vf "$SCALE_FILTER" \
            -c:a aac -b:a 128k \
            -movflags +faststart \
            "$output" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "  -> Compressed: $output"
            # Replace original with compressed
            mv "$output" "$input"
        else
            echo "  -> Failed to compress $input"
            rm -f "$output"
        fi
    fi
}

# Export function for find -exec (not needed if loop)
export -f compress_video
export TARGET_BITRATE
export SCALE_FILTER

# Loop through all MP4 files in assets
find "$ASSETS_DIR" -maxdepth 1 -name "*.mp4" | while read file; do
    compress_video "$file"
done

echo "Batch compression complete."

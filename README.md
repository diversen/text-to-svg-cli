# text-to-svg-cli

This is just a small CLI wrapper around https://www.npmjs.com/package/text-to-svg

Install:

    npm install text-to-svg-cli -g

Usage:

    text-to-svg-cli --config=config.json

Config file format:

{
    "text": "Logo",
    "font": "./Origami-Mommy-Pixellated.ttf",
    "save_path": "./test.svg",
    "options": { 
        "x": 0, 
        "y": 0, 
        "fontSize": 200, 
        "anchor": "top",
        "letterSpacing": "0.5",
        "attributes": { 
            "fill": "#1c76c5", 
            "stroke": "#41adff"
        }
    }
}


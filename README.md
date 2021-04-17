# Import Styles from JSON

Programmatically generate Figma styles from JSON .

## JSON Format

### Example

```json
{
  "colors": [
    {
      "name": "Blue/100",
      "hex": "#0000FF",
      "opacity": 1
    }
  ],
  "text": [
    {
      "name": "Body/30",
      "fontSize": 16,
      "textDecoration": "NONE",
      "fontName": {
        "family": "Graphik Web",
        "style": "Regular"
      },
      "letterSpacing": {
        "unit": "PIXELS",
        "value": 0
      },
      "lineHeight": {
        "unit": "PIXELS",
        "value": 24
      },
      "paragraphIndent": 0,
      "paragraphSpacing": 0,
      "textCase": "ORIGINAL"
    }
  ],
  "effect": [
    {
      "name": "Depth/100",
      "color": "rgba(58, 99, 249, 0.08))",
      "offset": {
        "x": 0,
        "y": 8
      },
      "radius": 6,
      "spread": -5
    }
  ]
  // Coming soon!
  // "grid": []
}
```

### Documentation

| Attribute        | Type              | Description                                    |
| ---------------- | ----------------- | ---------------------------------------------- |
| `colors`         | Array             | Collection of color styles.                    |
| `colors.name`    | String            | Name of Figma style.                           |
| `colors.hex`     | String            | Hex code value for Figma style.                |
| `colors.opacity` | Number (Optional) | Opacity value for Figma style. Default is `1`. |

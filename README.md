# Import Styles from JSON

Programmatically generate Figma styles from JSON .

## JSON Format

### Example

```json
{
  "color": [
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
        "family": "Roboto",
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
  ],
  "grid": [
    {
      "name": "Desktop",
      "pattern": "COLUMNS",
      "alignment": "STRETCH",
      "gutterSize": 24,
      "count": 12,
      "offset": 24
    }
  ]
}
```

### Documentation

| Attribute         | Type                                      | Description                                                                                                                                                               |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colors`          | Array                                     | Collection of color styles.                                                                                                                                               |
| `colors.name`     | String                                    | Name of Color style.                                                                                                                                                      |
| `colors.hex`      | String                                    | The hex color of the paint. This does not have a alpha property, use opacity instead.                                                                                     |
| `colors.opacity`  | Number (Optional)                         | The opacity of the paint. Must be a value between 0 and 1. Defaults to 1.                                                                                                 |
| `grid`            | Array                                     | Collection of grid styles.                                                                                                                                                |
| `grid.name`       | String                                    | Name of Grid style.                                                                                                                                                       |
| `grid.pattern`    | Enum `ROWS` - `COLUMNS` - `GRID`          | The string literal representing the layout grid this is. Always check the pattern before reading other properties.                                                        |
| `grid.alignment`  | Enum `MIN` - `MAX` - `STRETCH` - `CENTER` | How the layout grid is aligned. "MIN" corresponds to "Left" or "Top" in the UI depending on the orientation of the layout grid. "MAX" corresponds to "Right" or "Bottom". |
| `grid.gutterSize` | Number                                    | The distance between the sections of the grid.                                                                                                                            |
| `grid.count`      | Number                                    | The number of sections. This can be set to the value Infinity, which corresponds to "Auto" in the UI.                                                                     |
| `grid.offset`     | Number                                    | The size of a section. This is ignored when alignment == "STRETCH" since the size is set automatically.                                                                   |

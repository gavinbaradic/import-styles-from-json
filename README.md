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

#### Color

View Figma documentation on how [PaintStyles](https://www.figma.com/plugin-docs/api/PaintStyle/) are composed.

**colors:** `array`\
List of Paint to replace the fills, strokes, or backgrounds property with.

**colors.name:** `string`\
The name of the style.

**colors.description:** `string`\
The description of the style, used as an annotation when styles are published to the team library.

**colors.hex:** `string`\
The hex color of the paint. This does not have a alpha property, use opacity instead.

**colors.opacity?:** `number`\
The opacity of the paint. Must be a value between 0 and 1. Defaults to 1.

#### Grids

View Figma documentation on how [GridStyles](https://www.figma.com/plugin-docs/api/GridStyle/) are composed.

**grid:** `array`\
List of `LayoutGrid` to replace the layoutGrids property with.

**grid.name:** `string`\
The name of the style.

**grid.description:** `string`\
The description of the style, used as an annotation when styles are published to the team library.

**grid.pattern:** `ROWS` | `COLUMNS` | `GRID`\
The string literal representing the layout grid this is.

**grid.alignment:** `MIN` | `MAX` | `STRETCH` | `CENTER`\
How the layout grid is aligned. `MIN` corresponds to "Left" or "Top" in the UI depending on the orientation of the layout grid. `MAX` corresponds to "Right" or "Bottom".

**grid.gutterSize:** `number`\
The distance between the sections of the grid.

**grid.count:** `number`\
The number of sections. This can be set to the value `Infinity`, which corresponds to "Auto" in the UI.

**grid.sectionSize:** `number`\
The size of a section. This is ignored when alignment == `STRETCH` since the size is set automatically. When `pattern` == `GRID`, it is the size of individual grid cells.

**grid.offset?:** `number`\
The distance between the layout grid sections and the edges of the frame. This is ignored when `alignment` == `CENTER` since the size is set automatically.

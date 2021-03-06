# Import Styles from JSON

Programmatically generate Figma styles from JSON.

## Installation

- In the terminal, run `npm i && npm run webpack:watch`
- Open Figma and select **Plugins** and click **Manage Plugins...**, which opens a modal
- Click the **New** button in the modal that opens and select **Import plugin from manifest....**
- Locate the `manifest.json` file in your local copy of this repo

## JSON Format

### Example

```json
{
  "colorStyles": [
    {
      "name": "Blue/100",
      "description": "Primary blue used for marketing backgrounds.",
      "color": "#0000FF"
    }
  ],
  "textStyles": [
    {
      "name": "Body/30",
      "description": "Primary text style used for body copy.",
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
  "effectStyles": [
    {
      "name": "Depth/100",
      "description": "Depth style used for low-elevation UI elements.",
      "color": "rgba(58, 99, 249, 0.08))",
      "offset": {
        "x": 0,
        "y": 8
      },
      "radius": 6,
      "spread": -5
    }
  ],
  "gridStyles": [
    {
      "name": "Desktop",
      "description": "Desktop grid used for screens 1280px and up.",
      "pattern": "COLUMNS",
      "alignment": "STRETCH",
      "gutterSize": 24,
      "count": 12,
      "offset": 24
    }
  ]
}
```

## Documentation

### Color Styles

View Figma documentation on how [PaintStyles](https://www.figma.com/plugin-docs/api/PaintStyle/) are composed.

**colorStyles:** `array`\
List of Paint to replace the fills, strokes, or backgrounds property with.

**colors.name:** `string`\
The name of the style.

**colors.description?:** `string`\
The description of the style, used as an annotation when styles are published to the team library.

**colors.color:** `string`\
The color value of the paint. This may be a hex, rgb, or rgba value. To set opacity, you must use a format that supports alpha built in.

### Grid Styles

View Figma documentation on how [GridStyles](https://www.figma.com/plugin-docs/api/GridStyle/) are composed.

**gridStyles:** `array`\
List of `LayoutGrid` to replace the layoutGrids property with.

**grid.name:** `string`\
The name of the style.

**grid.description?:** `string`\
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

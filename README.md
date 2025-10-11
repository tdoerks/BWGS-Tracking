# BWGS Sample Tracking System

A comprehensive web-based tracking system for Bacterial Whole Genome Sequencing (BWGS) laboratory workflows.

## Features

- **Complete Workflow Tracking**: BAP → TSB → Extraction → Clean Extraction → Qubit → Indexing → Final Qubit
- **Batch Processing**: Process multiple samples simultaneously with auto-generated reference tables
- **Detailed Reagent Tracking**: Track lot numbers, technician initials, temperatures, and incubators
- **Data Persistence**: Automatic saving to browser localStorage
- **Data Export/Import**: Backup and restore your data as JSON files
- **Sample Numbering**: Auto-incrementing sample numbers (25B001, 25T001, 25E001, etc.)
- **Well Position Tracking**: Automatic well position assignment for plate-based workflows

## Usage

### Live Application

Access the tracker at: `https://tdoerks.github.io/BWGS-Tracking/`

### Local Usage

Simply open `index.html` in any modern web browser. No server or installation required!

## Workflow Steps

1. **Received** - Initial sample intake
2. **BAP Complete** - Blood Agar Plate processing
3. **TSB Complete** - Tryptic Soy Broth processing
4. **Extraction Complete** - DNA extraction
5. **Clean Extraction Complete** - DNA cleanup/purification
6. **Clean Extraction Qubit Complete** - Quality control after cleanup
7. **Indexing Complete** - Library preparation with unique barcodes
8. **Qubit Complete** - Final quality control

## Data Management

### Export Data
Click the "📥 Export Data" button to download a JSON backup of all your samples and tracking data.

### Import Data
Click the "📤 Import Data" button to restore data from a previously exported JSON file.

### Clear All Data
Use the "🗑️ Clear All Data" button to reset the tracker (with double confirmation).

## GitHub Pages Setup

1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch (usually `main`)
4. Save and wait a few minutes
5. Your site will be available at `https://yourusername.github.io/BWGS-Tracking/`

## Technical Details

- **Technology**: Pure HTML, CSS, and JavaScript (no dependencies)
- **Storage**: Browser localStorage API
- **Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **Data Format**: JSON

## Data Backup Recommendations

Since data is stored in browser localStorage:
- Export your data regularly using the Export button
- Keep JSON backups in a safe location
- Consider exporting after each major batch of work

## License

See LICENSE file for details.

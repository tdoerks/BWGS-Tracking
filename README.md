# BWGS Sample Tracking System

A comprehensive web-based tracking system for Bacterial Whole Genome Sequencing (BWGS) laboratory workflows.

## Features

### Core Functionality
- **Complete Workflow Tracking**: 8-stage BWGS pipeline from sample receipt to final QC
- **Batch Processing**: Process multiple samples simultaneously with reference tables
- **Single & Bulk Input**: Add samples one at a time or paste multiple IDs
- **Chain of Custody**: Track sample lineage through all workflow steps
- **Detailed Reagent Tracking**: Lot numbers, technicians, dates, temperatures, incubators

### Data Management
- **Auto-Save**: Automatic persistence to browser localStorage
- **JSON Export/Import**: Full backup and restore capability
- **CSV Export**: Excel-compatible reports with all workflow data
- **Password Protection**: Simple access control (password: bwgs2025)

### Search & Organization
- **Real-time Search**: Find samples instantly by ID
- **Status Filters**: View samples by workflow stage
- **Status Dashboard**: Visual overview of sample distribution
- **Sample Notes**: Add observations and track issues

### Quality of Life
- **Delete Samples**: Remove test or incorrect entries
- **View Sample Details**: Quick chain-of-custody overview
- **Auto-numbering**: Samples, plates, runs, and wells
- **Duplicate Detection**: Prevents adding existing samples

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
- **Export regularly**: Use "📥 Export JSON" button daily or after major work
- **Keep multiple backups**: Save JSON files with dates in filenames
- **Use CSV for reports**: Export to CSV for sharing with non-technical staff
- **Before clearing browser**: Always export first!
- **Browser-specific**: Data doesn't sync between Chrome/Firefox/etc.

## Password

Default password: `bwgs2025`

To change: Edit line 1840 in `index.html`:
```javascript
var correctPassword = 'YOUR_NEW_PASSWORD';
```

**Security Note**: This is JavaScript-based protection (visible in source code). Suitable for casual access control only. For HIPAA/secure environments, deploy with proper backend authentication.

## Detailed Documentation

- See [FEATURES.md](FEATURES.md) for complete feature list
- See workflow section below for step-by-step guide

## Common Tasks

### Adding Samples
1. Enter Sample ID and initials, click "Add Sample"
2. OR click "Switch to Bulk Input" and paste multiple IDs

### Processing Samples
1. Click status filter or search for samples
2. Click next action button (e.g., "Start BAP")
3. Fill in reagent lots, technician info
4. Click "Complete"

### Batch Processing
1. Select 2+ samples at same workflow stage (checkboxes appear automatically)
2. Click "Start Batch Processing"
3. Fill in shared reagent info
4. Individual fields (like indexes) filled per sample

### Finding Samples
- Use search box to find by ID
- Use radio buttons to filter by status
- Check dashboard for counts

### Exporting Data
- **JSON**: Full backup for importing back into tracker
- **CSV**: Open in Excel for analysis, reports, or sharing

## License

See LICENSE file for details.

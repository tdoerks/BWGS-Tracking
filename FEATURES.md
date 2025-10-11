# BWGS Tracker - Feature List

## 🎯 Core Features

### Sample Management
- **Single Sample Input**: Add one sample at a time with Sample ID and technician initials
- **Bulk Sample Input**: Paste multiple sample IDs (one per line) for batch registration
- **Duplicate Detection**: Prevents adding samples that already exist in the system
- **Auto-incrementing Numbers**: Automatic sample numbering (25B001, 25T001, 25E001, etc.)

### Workflow Tracking
Complete 8-stage bacterial genome sequencing pipeline:
1. **Received** - Initial sample intake
2. **BAP Complete** - Blood Agar Plate processing
3. **TSB Complete** - Tryptic Soy Broth processing
4. **Extraction Complete** - DNA extraction
5. **Clean Extraction Complete** - DNA cleanup/purification
6. **Clean Extraction Qubit Complete** - QC after cleanup
7. **Indexing Complete** - Library prep with unique barcodes
8. **Qubit Complete** - Final quality control

### Batch Processing
- Process multiple samples simultaneously (≥2 samples at same stage)
- Auto-generated reference tables showing source→target mappings
- Shared reagent lot tracking for batches
- Individual well position and index assignment for plate-based workflows

### Data Tracking Per Step

**BAP/TSB:**
- Technician initials
- Lot number
- Temperature (37°C, 35°C, 42°C)
- Incubator (INC-1, INC-2)
- Completion date

**Extraction:**
- Extraction run number
- Reagent lots: AW1, AW2, Ethanol, Buffer AL/ATL/AE, Proteinase K, DNeasy columns
- Technician and completion date

**Clean Extraction:**
- Storage plate number
- Well position (auto-assigned, editable)
- Reagent lots: Beads, NF H2O, EtOH, Qubit reagent
- Volumes: Cleanup volume, elution in/out
- Technician and completion date

**Indexing (XT):**
- Storage plate number
- Well position (auto-assigned per sample)
- Index assignment (i5/i7 with thaw counts)
- Reagent lots: TD/ATM/NT buffers, NPM, Resuspension Buffer, Indexes Kit, Beads, EtOH, NF H2O
- Double-sided cleanup concentrations
- Technician and completion date

**Qubit Analysis:**
- Concentration (ng/uL)
- Reagent lot
- Date measured
- Technician

## 🔍 Search & Filter

### Search Functionality
- Real-time search by Sample ID
- Case-insensitive search
- Instant results as you type

### Status Filters
- View All samples
- Filter by Received
- Filter by BAP Complete
- Filter by TSB Complete
- Filter by Extraction Complete
- Filter by Complete (finished samples)

## 📊 Status Dashboard
- Visual overview of sample counts at each workflow stage
- Color-coded status cards with icons
- Total sample count
- Real-time updates

## 💾 Data Management

### Data Persistence
- Automatic saving to browser localStorage
- Data persists between sessions
- No server required

### Export Options
- **JSON Export**: Full backup with all metadata for import/restore
- **CSV Export**: Spreadsheet-compatible format for Excel/Google Sheets
  - All workflow steps in columns
  - Technician info, dates, lot numbers
  - Qubit concentrations
  - Index assignments

### Import
- Import previously exported JSON backups
- Confirmation before overwriting data
- Error handling for corrupted files

### Clear Data
- Double-confirmation before deletion
- Warning to export first
- Complete data wipe

## 🔐 Security

### Password Protection
- Login screen on page load
- Session-based authentication (stays logged in during browser session)
- Default password: `bwgs2025` (easily changeable in code)
- Prevents casual access

**Note**: This is JavaScript-based protection (not cryptographically secure). Password is visible in source code. Suitable for casual protection only.

## ✏️ Sample Actions

### View Sample
- Pop-up showing complete chain of custody
- All workflow steps with numbers
- Quick status overview

### Edit Notes
- Add observations or issues per sample
- Notes displayed inline with sample
- Editable at any time

### Delete Sample
- Remove samples from system
- Confirmation required
- Permanent deletion (cannot be undone)

## 📋 Chain of Custody
Every workflow step references the previous step:
- TSB shows which BAP was used
- Extraction shows which TSB was used
- Clean Extraction shows which Extraction was used
- Indexing shows which Clean Extraction was used
- Qubit shows which Indexing was used

Reference tables in batch processing show these relationships clearly.

## 🎨 User Interface

### Design Features
- Clean, modern interface
- Color-coded status badges
- Responsive grid layouts
- Intuitive button placement
- Modal forms for data entry
- Real-time validation

### Workflow Guidance
- Status indicators show next step
- Action buttons only show available next steps
- Batch processing only enabled for compatible samples
- Checkboxes appear when ≥2 samples at same stage

## 🔢 Sample Numbering System

- **BAP**: 25B001, 25B002, 25B003...
- **TSB**: 25T001, 25T002, 25T003...
- **Extraction**: 25E001, 25E002, 25E003...
- **Clean Extraction**: 25CE001, 25CE002, 25CE003...
- **Indexing**: 25XT001, 25XT002, 25XT003...

### Run Numbers
- Extraction runs: 25-1, 25-2, 25-3...
- Clean Extraction plates: 25CEP01, 25CEP02...
- Indexing plates: 25XLP01, 25XLP02...

## 📱 Browser Compatibility
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅ (with responsive design)

## 💡 Future Enhancements (When Backend Added)

When migrating to PostgreSQL/Firebase:
- Multi-user access with proper authentication
- Real-time collaboration (see updates from other techs)
- User roles and permissions
- Complete audit trail
- Advanced reporting and analytics
- Email notifications
- Barcode scanning integration
- Equipment integration
- Automated QC checks
- Sample location tracking

## 🚀 Quick Start

1. Open `index.html` in any browser
2. Enter password: `bwgs2025`
3. Add samples (single or bulk)
4. Process through workflow steps
5. Export data regularly for backups

## 📖 Tips

- **Export regularly**: Use "Export JSON" for backups
- **Use CSV for reports**: Open in Excel for analysis
- **Batch process**: Select multiple samples for efficiency
- **Add notes**: Document issues or observations
- **Search feature**: Quickly find samples by ID
- **Dashboard**: Monitor workflow bottlenecks

## ⚠️ Important Notes

- Data stored in browser localStorage (5-10MB limit)
- Clearing browser data will delete samples
- Export backups before major changes
- One browser = one data set (not synced across browsers/computers)
- For multi-user setup, backend database required

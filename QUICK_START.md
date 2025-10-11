# BWGS Tracker - Quick Start Guide

## 🚀 First Time Setup

1. Open `index.html` in your browser
2. Enter password: **bwgs2025**
3. You're ready to go!

## 📝 Adding Samples

### Single Sample
1. Enter Sample ID (e.g., 25KS01-001)
2. Enter your initials (e.g., TJD)
3. Click "Add Sample"

### Multiple Samples
1. Click "Switch to Bulk Input"
2. Enter your initials
3. Paste sample IDs (one per line)
4. Click "Add All Samples"

## 🔄 Processing Workflow

1. Find your samples (search or filter)
2. Click the blue action button (e.g., "Start BAP")
3. Fill in the form:
   - Technician initials
   - Lot number
   - Temperature & incubator
   - Any specific reagent lots
4. Click "Complete"

## 📦 Batch Processing

1. Look for samples at the same stage (checkboxes appear when ≥2 samples)
2. Check the boxes for samples to process together
3. Click "Start Batch Processing"
4. Fill in shared information
5. Individual fields (like well positions) auto-fill
6. Click "Complete Batch"

## 🔍 Finding Samples

### Search
Type in the search box - results appear instantly

### Filter
Click radio buttons:
- All
- Received
- BAP
- TSB
- Extraction
- Complete

## 📊 Dashboard

Top of page shows:
- Count of samples at each stage
- Total samples
- Color-coded cards

## 💾 Backup Your Data

### Regular Backups
Click "📥 Export JSON" at top
- Saves a file like `bwgs-tracker-backup-2025-10-11.json`
- **Do this daily or after major work!**

### Reports for Others
Click "📊 Export CSV"
- Opens in Excel/Google Sheets
- All data in columns
- Great for reports

## ✏️ Sample Actions

### View
Click "View" button to see complete history

### Notes
Click "Notes" button to add observations
- Track issues
- Note anything unusual
- Shows inline on sample

### Delete
Click "Delete" button to remove sample
- Requires confirmation
- **Cannot be undone!**

## 🔄 Restoring Data

1. Click "📤 Import Data"
2. Select your JSON backup file
3. Confirm to replace current data

## ⚠️ Important Reminders

### Data Storage
- Saved in **this browser only**
- Different browsers = different data
- Clearing browser data = losing samples
- **Export regularly!**

### Password
- Current: `bwgs2025`
- Change in Settings (see README)
- Not secure - just prevents casual access

### Multi-Machine Use
For sharing between computers:
1. Export JSON from Computer A
2. Import JSON on Computer B
3. Or set up database (see README)

## 🆘 Common Issues

### "My samples disappeared!"
- Browser data was cleared
- Import your last JSON backup

### "Can't find a sample"
- Use search box
- Check status filters
- Use "All" filter to see everything

### "Wrong data entered"
- Click "Delete" and re-add
- Or use "Notes" to document correction

### "Need to share with team"
- Export CSV for reports
- OR set up database backend (see README)

## 📖 More Help

- **Complete Features**: See `FEATURES.md`
- **Common Tasks**: See `README.md`
- **Version History**: See `CHANGELOG.md`
- **Development Summary**: See `SUMMARY.md`

## 🎯 Workflow Stages

1. **Received** → Start BAP
2. **BAP Complete** → Start TSB
3. **TSB Complete** → Start Extraction
4. **Extraction Complete** → Start Clean Extraction
5. **Clean Extraction Complete** → Start Qubit
6. **Clean Extraction Qubit Complete** → Start Indexing
7. **Indexing Complete** → Start Final Qubit
8. **Qubit Complete** → ✅ Done!

## 💡 Pro Tips

- **Use batch processing** for efficiency (2+ samples)
- **Export after each session** (don't lose data!)
- **Use notes** to track issues early
- **Check dashboard** to find bottlenecks
- **Use CSV export** for weekly reports
- **Search is instant** - no need to scroll

## 🎉 You're Ready!

Start by adding a few test samples and walking through the workflow.

**Remember**: Export your data regularly!

# Testing Guide for Experimental Features

## 🎯 New Features to Test

### 1. 📅 Timeline View
**How to Test:**
1. Add some samples with different dates
2. Click the **"📅 Timeline"** button in the header
3. Try different view options:
   - All Samples
   - Last 7 Days
   - Last 30 Days
4. Process some samples through different stages
5. Check the timeline - it should show all events chronologically
6. Look for:
   - ✅ Color-coded stage markers
   - ✅ Event details (tech, date, specific info)
   - ✅ Proper date/time formatting

### 2. 📈 Analytics Dashboard
**How to Test:**
1. Make sure you have samples at various stages
2. Click the **"📈 Analytics"** button in the header
3. Check these visualizations:
   - Top stat cards (Total, Completed, In Progress, %)
   - Status distribution bar chart
   - Technician workload chart
   - Daily sample input (last 14 days)
   - Stage completion rates
4. Look for:
   - ✅ Accurate counts
   - ✅ Bar chart animations
   - ✅ Proper percentages
   - ✅ Gradient colors

### 3. 🔲 Bulk Operations
**How to Test:**
1. Add 5-10 test samples
2. Check the **"Select All"** checkbox at the top
3. Notice the purple bulk operations bar appears
4. Try these actions:
   - Click individual checkboxes to select specific samples
   - Use **"🗑️ Delete Selected"** to delete multiple samples
   - Use **"📝 Change Status"** to update multiple samples at once
   - Use **"✖ Clear Selection"** to deselect all
5. Test filtering:
   - Filter by status (e.g., "Received")
   - Click "Select All" - should only select visible samples
6. Look for:
   - ✅ Selection counter updates correctly
   - ✅ Bulk delete removes all selected
   - ✅ Bulk status change works
   - ✅ Bar hides when no selection

### 4. 📱 QR Code Generation
**How to Test:**
1. Select any sample
2. Click the purple **"QR Code"** button
3. Modal should show:
   - Large QR code image
   - Sample information below
4. Try scanning the QR code with your phone:
   - Should contain JSON data with sample ID, status, date, etc.
5. Click **"🖨️ Print Label"**:
   - Should open print preview
   - Label should have QR code + sample info
6. Look for:
   - ✅ QR code is scannable
   - ✅ Sample info displays correctly
   - ✅ Print layout is clean and professional
   - ✅ Works in both light and dark mode

## 📊 Quick Test Scenario

**Full Walkthrough:**
1. Add 10 test samples (use Bulk Input)
2. Process 3 samples through BAP
3. Process 2 through TSB
4. Process 1 through to completion
5. Now test each feature:
   - **Timeline**: Should show ~16 events (10 received + 6 processed)
   - **Analytics**: Should show distribution across stages
   - **Bulk Ops**: Select all "Received" samples and delete them
   - **QR Code**: Generate and print a label for any sample

## 🐛 Things to Check

- [ ] All features work with existing data
- [ ] Dark mode toggle works with new features
- [ ] Print button still works for main view
- [ ] Keyboard shortcuts still work (Ctrl+F, Esc, etc.)
- [ ] Mobile responsive on phone
- [ ] Data persists after refresh
- [ ] Export/Import still works

## 🎨 Visual Check

Open in both:
- Light mode
- Dark mode

All charts and modals should look good in both themes!

## 📝 Notes

- All data is still in localStorage (browser-specific)
- Export regularly to avoid data loss
- QR codes use Google Charts API (requires internet)
- Timeline events are sorted newest first

## ⚠️ Known Limitations

- QR codes need internet connection (uses Google Charts API)
- Bulk operations work on visible samples only (filtered view)
- Timeline can be slow with 1000+ events (but that's a lot of samples!)

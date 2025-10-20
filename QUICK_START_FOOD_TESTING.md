# 🚀 Quick Start - Food Testing Module

## 🎯 **GET STARTED IN 5 MINUTES**

**Live Site:** https://tdoerks.github.io/BWGS-Tracking/
**Password:** `bwgs2025`

---

## Step 1: Switch to Food Testing Module

1. Look at the **sidebar** (left side)
2. Find the **Module** section at the top
3. Click **🥩 Food Testing** button
4. Button will light up with red gradient when selected

---

## Step 2: Add Your First Food Sample

1. You're now on **📥 Food Samples** tab
2. Fill out the form:
   ```
   Sample ID:    25KS01CB01
   Sample Type:  CB - Chicken Breast
   Store #:      12345
   Brand:        Tyson
   Date:         (today is pre-filled)
   ```
3. Additional fields appear automatically:
   - Grind/Whole: **Grind**
   - Organic Claim: **None**
4. Pathogens are auto-checked: **EC, C1, S1, E**
5. Click **➕ Add Food Sample & Create Workflows**

**Result:** ✅ Sample added + 4 workflows created!

---

## Step 3: Process E. coli Workflow

1. Click **🧫 E. coli Testing** tab
2. See your sample in **Day 2 - MAC Broth** column
3. Click the sample card
4. Modal opens - fill it out:
   ```
   MAC Broth Lot #:  LOT-MAC-001
   Technician:       AB
   Temperature:      37°C
   Incubator:        INC-1
   Time In:          09:00
   Time Out:         17:00
   ```
5. Click **✓ Complete Stage**
6. Sample moves to **Day 2 - MAC Agar** column!

**Keep going through all 5 stages:**
- Day 2 MAC Broth → Day 2 MAC Agar → Day 3 Pink Colonies → Day 4 BAP → Day 5 MALDI

---

## Step 4: Generate Isolate (MALDI Stage)

When sample reaches **Day 5 - MALDI**:

1. Click the sample card
2. Fill out MALDI results:
   ```
   Species ID:       Escherichia coli
   Confidence:       2.4
   Confirmed:        Yes - Generate Isolate
   Technician:       AB
   ```
3. Click **✓ Complete Stage**

**Magic happens!** 🎉
- ✅ Isolate `25KS01CB01-EC` created
- ✅ Automatically sent to Sequencing Module
- ✅ Notification appears

---

## Step 5: See Isolate in Sequencing

1. Click **🧬 Isolates** tab
2. See your new isolate with:
   - ID: **25KS01CB01-EC**
   - Species: **Escherichia coli**
   - Status: **✅ Sent to Sequencing**
3. Click the **sequencing sample link**
4. You're now in **Sequencing Module**!
5. Find sample **25KS01CB01-EC** ready for BAP → WGS pipeline

**Full circle complete!** 🔄

---

## 🎨 **VISUAL GUIDE**

### Sample ID Format:
```
25KS01CB01
│ │ │ │ │
│ │ │ │ └─ Number
│ │ │ └─── Type (CB = Chicken Breast)
│ │ └───── Month
│ └─────── State
└───────── Year
```

### Pathogen Codes:
- **EC** = E. coli (Pink badge)
- **C1** = Campylobacter (Purple badge)
- **S1** = Salmonella (Red badge)
- **E** = Enterococcus (Orange badge)

### Sample Types:
**Meat:** CB, GT, GB, CL, CG, CH
**Seafood:** SA, SH, TI

---

## ⚡ **PRO TIPS**

1. **Module Switching:** Use sidebar buttons to switch between Food Testing ↔ Sequencing
2. **Tab Navigation:** Click tab buttons to switch between Samples/E. coli/Isolates
3. **Auto-Fields:** Select sample type first - fields populate automatically
4. **Pathogen Selection:** Checkboxes show which pathogens apply to each sample type
5. **Auto-Sequencing:** Only EC, C1, S1 go to sequencing - others stop at isolates

---

## 📋 **E. COLI WORKFLOW STAGES**

| Stage | What to Record | Duration |
|-------|----------------|----------|
| **Day 2 - MAC Broth** | Lot #, Tech, Temp, Incubator, Times | ~18-24h |
| **Day 2 - MAC Agar** | Plate Lot #, Tech, Temp, Incubator, Times | ~18-24h |
| **Day 3 - Pink Colonies** | Y/N, Colony count, Tech | Visual inspection |
| **Day 4 - BAP** | Plate Lot #, Typical growth, Tech, Times | ~18-24h |
| **Day 5 - MALDI** | Species, Confidence, Confirmed?, Tech | ~15 min |

**Total Time:** ~5 days from sample receipt to isolate generation

---

## ❓ **COMMON QUESTIONS**

**Q: What if no pink colonies on Day 3?**
A: Select "No - Negative" and the workflow stops (negative sample)

**Q: What happens to non-sequenced pathogens (E, V1, V2, A)?**
A: They generate isolates but don't auto-send to sequencing

**Q: Can I add multiple samples at once?**
A: Yes! Add samples one by one - each creates its own workflows

**Q: How do I find an isolate in the sequencing module?**
A: Use search box or go to Isolates tab and click the sequencing link

**Q: Where is data saved?**
A: LocalStorage (browser) - use Export JSON for backups

---

## 🎯 **NEXT STEPS**

1. **Add more samples:** Try different sample types (GT, SA, etc.)
2. **Process workflows:** Move samples through all 5 stages
3. **Generate isolates:** Complete MALDI stage
4. **Track in sequencing:** Follow isolates through WGS pipeline
5. **Export data:** Use Ctrl+E or sidebar Export button

---

## 🆘 **NEED HELP?**

**Full Documentation:** See `FOOD_TESTING_MODULE.md`
**Live Site:** https://tdoerks.github.io/BWGS-Tracking/
**Password:** `bwgs2025`

---

**You're ready to track food samples end-to-end!** 🎉

Start with the 5 steps above and you'll have a complete workflow in 5 minutes!

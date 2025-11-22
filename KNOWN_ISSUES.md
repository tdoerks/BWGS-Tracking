# Known Issues - BWGS Tracker

## ✅ Fixed Issues

### Food Testing Module

#### Delete Success Message Shows Wrong Count
**Status:** ✅ FIXED (2025-11-22)
**Priority:** Low
**Impact:** Cosmetic only - deletion works correctly

**Issue:**
When deleting multiple food samples using "Delete Selected" button:
- Samples are deleted correctly ✅
- Success message was showing "0 sample deleted successfully" instead of actual count ❌

**Fix:** Changed alert to use original `count` variable (from `selectedSamplesForDelete.length`) instead of the `deletedCount` tracking variable. This ensures the message always shows the correct number.

**Files Modified:**
- `index.html` - line ~16773
- `playground.html` - line ~16765

---

## 🐛 Current Known Issues

No known bugs at this time! 🎉

---

## 📝 Enhancement Ideas Backlog

See `ENHANCEMENT_IDEAS.md` for full list.

### Quick Wins (High Priority):
- [ ] Duplicate sample ID warning
- [ ] Smart date filters ("Today", "This Week")
- [ ] Reagent lot autocomplete

### Nice to Have:
- [ ] Progress bars for samples
- [ ] Sample history audit trail
- [ ] Barcode scanner support

---

**Last Updated:** 2025-11-10

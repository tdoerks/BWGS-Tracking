# Known Issues - BWGS Tracker

## 🐛 Minor Bugs (Non-Critical)

### Food Testing Module

#### Delete Success Message Shows Wrong Count
**Status:** Found, not fixed yet
**Priority:** Low
**Impact:** Cosmetic only - deletion works correctly

**Issue:**
When deleting multiple food samples using "Delete Selected" button:
- Samples are deleted correctly ✅
- Success message shows "0 sample deleted successfully" instead of actual count ❌

**Expected:** "3 samples deleted successfully"
**Actual:** "0 sample deleted successfully"

**Location:** `bulkDeleteSamples()` function, line ~15869
**Root Cause:** `deletedCount` variable not being set correctly in the alert message context

**Workaround:** None needed - deletion works fine, just ignore the wrong number

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

# Changelog

## Version 2.0 - Enhanced Production Release (2025-10-11)

### 🎉 Major New Features

#### Data Management
- **CSV Export**: Export all sample data to Excel-compatible CSV format
  - Complete workflow history
  - Reagent lots, technician info, dates
  - Qubit concentrations and index assignments
- **Improved JSON Export**: Now labeled as "Export JSON" for clarity
- **localStorage Persistence**: Auto-save after every operation
- **Import/Export UI**: Clear buttons in header

#### Search & Filter
- **Real-time Search**: Search samples by ID with instant results
- **Status Filters**: Filter by workflow stage (Received, BAP, TSB, Extraction, Complete, etc.)
- **Smart Filter Logic**: Click radio buttons to filter view

#### Status Dashboard
- **Visual Overview**: Color-coded cards showing sample counts at each stage
- **Stage Icons**: Visual indicators for each workflow step
- **Total Count**: See total samples at a glance
- **Real-time Updates**: Dashboard updates automatically

#### Sample Management
- **Delete Function**: Remove samples with confirmation
- **Notes Field**: Add observations and track issues per sample
  - Inline display in sample list
  - Quick edit via "Notes" button
  - Persistent storage
- **Enhanced View**: Sample details popup shows complete chain of custody

#### Security
- **Password Protection**: Login screen on page load
- **Session Persistence**: Stay logged in during browser session
- **Default Password**: `bwgs2025` (easily changeable)

### 🔧 Improvements
- Better button organization and labeling
- Improved visual hierarchy
- Enhanced error messages
- Duplicate detection on sample add
- Auto-focus on password input

### 📚 Documentation
- **FEATURES.md**: Comprehensive feature documentation
- **Updated README.md**: Quick start guide and common tasks
- **CHANGELOG.md**: Version history
- Better inline code comments

### 🎨 UI/UX Enhancements
- Color-coded status badges
- Dashboard with visual metrics
- Cleaner button layouts
- Better mobile responsiveness
- Improved form layouts

## Version 1.0 - Initial Release

### Core Features
- 8-stage BWGS workflow tracking
- Single and bulk sample input
- Batch processing for 2+ samples
- Reference tables for source→target mapping
- Detailed reagent lot tracking
- Auto-incrementing sample numbers
- Well position assignment
- localStorage persistence
- JSON export/import
- Chain of custody tracking

### Workflow Stages
1. Received
2. BAP Complete
3. TSB Complete
4. Extraction Complete
5. Clean Extraction Complete
6. Clean Extraction Qubit Complete
7. Indexing Complete
8. Qubit Complete

### Data Tracking
- Technician initials
- Lot numbers
- Temperatures & incubators
- Extraction runs
- Storage plates & well positions
- Index assignments (i5/i7)
- Qubit concentrations
- Completion dates

## Roadmap

### Planned for v3.0 (Backend Integration)
- PostgreSQL/Firebase database
- Multi-user authentication
- Real-time collaboration
- User roles & permissions
- Complete audit trail
- Advanced reporting
- Email notifications
- Barcode scanning
- Equipment integration
- Sample location tracking

### Under Consideration
- Mobile app version
- Offline mode with sync
- Advanced analytics dashboard
- Custom workflow templates
- Integration with LIMS systems
- Automated QC checks
- Photo/image attachments
- Print-friendly formats

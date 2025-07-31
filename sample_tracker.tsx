import React, { useState, useEffect } from 'react';
import { Search, Plus, Eye, Edit, Calendar, MapPin, User, FileText, Filter, Download } from 'lucide-react';

const SampleTracker = () => {
  const [samples, setSamples] = useState([]);
  const [filteredSamples, setFilteredSamples] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);
  const [showProcessForm, setShowProcessForm] = useState(false);
  const [processingSample, setProcessingSample] = useState(null);
  const [processStep, setProcessStep] = useState('');

  // Initialize with sample data
  useEffect(() => {
    const initialSamples = [
      {
        id: '25KS01CB02-EC',
        species: 'E.coli',
        bapNumber: '25B019',
        bapLotNumbers: {
          plateMedia: 'PM2025001',
          incubator: 'INC-A1'
        },
        tsbNumber: '25T019',
        tsbLotNumbers: {
          tsbMedia: 'TSB2025001',
          incubator: 'INC-A1'
        },
        extractionNumber: '25E019',
        extractionLotNumbers: {
          aw1: '57805759',
          aw2: '57804898',
          etoh: '23-50-7 250112',
          bufferAL: '57802729',
          bufferATL: '57802643',
          proteinaseK: '178025280',
          bufferAE: '57804900',
          spinColumn: '175037916',
          qiacubeRun: '25-1'
        },
        dilutionNumber: '25D019',
        cleanupNumber: '25C019',
        cleanupLotNumbers: {
          beadType: 'SPRI',
          beadLot: 'SPRI2025001',
          nfH2o: 'NFH2025001',
          etohDilution: 'ETH2025001',
          nfH2oElution: 'NFH2025002',
          elutionVolume: '30',
          wellId: 'A01',
          storage: 'Plate',
          qubitReagent: 'QBT2025001',
          boxNumber: 'BOX-001',
          freezerNumber: '1',
          shelfNumber: '2',
          rackNumber: '3',
          drawerNumber: '1'
        },
        indexNumber: '25I019',
        indexLotNumbers: {
          tdBuffer: 'TD2025001',
          atmntBuffer: 'ATM2025001',
          npmBuffer: 'NPM2025001',
          resuspensionBuffer: 'RSP2025001',
          indexesKit: 'IK2025001',
          i5Indexes: 'I52025001',
          i5TimesThawed: '2',
          i7Indexes: 'I72025001',
          i7TimesThawed: '1',
          beadType: 'SPRI',
          beadLot: 'SPRI2025001',
          etohLot: 'ETH2025001',
          nfH2oLot: 'NFH2025001',
          plateNumber: 'PLT-001',
          wellId: 'A01',
          qubitReagent: 'QBT2025001'
        },
        status: 'WGS Complete',
        dateReceived: '2025-01-15',
        dateBap: '2025-01-16',
        dateTsb: '2025-01-17',
        dateExtraction: '2025-01-18',
        dateDilution: '2025-01-19',
        dateCleanup: '2025-01-20',
        dateIndex: '2025-01-21',
        dateWgs: '2025-01-22',
        wgsData: {
          r1File: 'sample_R1.fastq.gz',
          r2File: 'sample_R2.fastq.gz',
          bioSampleSub: 'BS2025001',
          samnNumber: 'SAMN12345678',
          sraSub: 'SRA2025001',
          srrNumber: 'SRR9876543'
        },
        initials: 'AMD',
        freezerLocation: 'F1-S2-R3-B1',
        notes: 'High quality DNA',
        qcStatus: 'Pass'
      },
      {
        id: '25KS01GT01-S1',
        species: 'Salmonella',
        bapNumber: '25B020',
        bapLotNumbers: {
          plateMedia: 'PM2025001',
          incubator: 'INC-A1'
        },
        tsbNumber: '25T020',
        tsbLotNumbers: {
          tsbMedia: 'TSB2025001',
          incubator: 'INC-A1'
        },
        extractionNumber: '25E020',
        extractionLotNumbers: {
          aw1: '57805759',
          aw2: '57804898',
          etoh: '23-50-7 250112',
          bufferAL: '57802729',
          bufferATL: '57802643',
          proteinaseK: '178025280',
          bufferAE: '57804900',
          spinColumn: '175037916',
          qiacubeRun: '25-2'
        },
        dilutionNumber: '',
        cleanupNumber: '',
        cleanupLotNumbers: null,
        cleanupLotNumbers: null,
        cleanupLotNumbers: null,
        cleanupLotNumbers: null,
        indexNumber: '',
        indexLotNumbers: null,
        indexLotNumbers: null,
        indexLotNumbers: null,
        indexLotNumbers: null,
        status: 'Extraction Complete',
        dateReceived: '2025-01-16',
        dateBap: '2025-01-17',
        dateTsb: '2025-01-18',
        dateExtraction: '2025-01-19',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateWgs: '',
        wgsData: null,
        wgsData: null,
        wgsData: null,
        initials: 'TD',
        freezerLocation: 'F1-S2-R3-B2',
        notes: 'Ready for dilution',
        qcStatus: 'Pass'
      },
      {
        id: '25KS01GT02-EC',
        species: 'E.coli',
        bapNumber: '25B021',
        bapLotNumbers: {
          plateMedia: 'PM2025002',
          incubator: 'INC-A2'
        },
        tsbNumber: '',
        tsbLotNumbers: null,
        tsbLotNumbers: null,
        tsbLotNumbers: null,
        extractionNumber: '',
        extractionLotNumbers: null,
        extractionLotNumbers: null,
        extractionLotNumbers: null,
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        status: 'BAP Complete',
        dateReceived: '2025-01-17',
        dateBap: '2025-01-18',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateWgs: '',
        initials: 'AMD',
        freezerLocation: 'F1-S2-R3-B3',
        notes: 'Ready for TSB',
        qcStatus: 'Pending'
      },
      {
        id: '25KS01GT03-EC',
        species: 'E.coli',
        bapNumber: '',
        bapLotNumbers: null,
        bapLotNumbers: null,
        bapLotNumbers: null,
        tsbNumber: '',
        extractionNumber: '',
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        status: 'Sample Received',
        dateReceived: '2025-01-18',
        dateBap: '',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateWgs: '',
        initials: 'TD',
        freezerLocation: 'F1-S2-R3-B4',
        notes: 'Ready for BAP',
        qcStatus: 'Pending'
      }
    ];
    setSamples(initialSamples);
    setFilteredSamples(initialSamples);
  }, []);

  // Filter samples
  useEffect(() => {
    let filtered = samples.filter(sample => 
      sample.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sample.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSpecies !== 'all') {
      filtered = filtered.filter(sample => sample.species === selectedSpecies);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(sample => sample.status === selectedStatus);
    }

    setFilteredSamples(filtered);
  }, [samples, searchTerm, selectedSpecies, selectedStatus]);

  const getStatusColor = (status) => {
    const colors = {
      'Sample Received': 'bg-gray-100 text-gray-800',
      'BAP Complete': 'bg-blue-100 text-blue-800',
      'TSB Complete': 'bg-yellow-100 text-yellow-800',
      'Extraction Complete': 'bg-orange-100 text-orange-800',
      'Dilution Complete': 'bg-purple-100 text-purple-800',
      'Cleanup Complete': 'bg-indigo-100 text-indigo-800',
      'Index Complete': 'bg-pink-100 text-pink-800',
      'WGS Complete': 'bg-green-100 text-green-800',
      'QC Failed': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getQCColor = (qcStatus) => {
    const colors = {
      'Pass': 'text-green-600',
      'Fail': 'text-red-600',
      'Pending': 'text-yellow-600'
    };
    return colors[qcStatus] || 'text-gray-600';
  };

  const getNextStep = (currentStatus) => {
    const workflow = {
      'Sample Received': 'BAP',
      'BAP Complete': 'TSB',
      'TSB Complete': 'Extraction',
      'Extraction Complete': 'Dilution',
      'Dilution Complete': 'Cleanup',
      'Cleanup Complete': 'Index',
      'Index Complete': 'WGS'
    };
    return workflow[currentStatus];
  };

  const getNextStepLabel = (currentStatus) => {
    const labels = {
      'Sample Received': 'Start BAP',
      'BAP Complete': 'Start TSB',
      'TSB Complete': 'Start Extraction',
      'Extraction Complete': 'Start Dilution',
      'Dilution Complete': 'Start Cleanup',
      'Cleanup Complete': 'Start Index',
      'Index Complete': 'Complete WGS'
    };
    return labels[currentStatus];
  };

  const generateNextNumber = (step, samples) => {
    const prefix = {
      'BAP': '25B',
      'TSB': '25T',
      'Extraction': '25E',
      'Dilution': '25D',
      'Cleanup': '25C',
      'Index': '25I'
    };
    
    const fieldMap = {
      'BAP': 'bapNumber',
      'TSB': 'tsbNumber',
      'Extraction': 'extractionNumber',
      'Dilution': 'dilutionNumber',
      'Cleanup': 'cleanupNumber',
      'Index': 'indexNumber'
    };
    
    const existingNumbers = samples
      .map(s => s[fieldMap[step]])
      .filter(n => n && n.startsWith(prefix[step]))
      .map(n => parseInt(n.replace(prefix[step], '')))
      .filter(n => !isNaN(n));
    
    const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
    return `${prefix[step]}${String(nextNumber).padStart(3, '0')}`;
  };

  const AddSampleForm = () => {
    const [formData, setFormData] = useState({
      id: '',
      species: 'E.coli',
      dateReceived: new Date().toISOString().split('T')[0],
      initials: '',
      freezerLocation: '',
      notes: ''
    });

    const handleSubmit = () => {
      if (!formData.id || !formData.initials) {
        alert('Please fill in required fields');
        return;
      }

      const newSample = {
        ...formData,
        bapNumber: '',
        tsbNumber: '',
        extractionNumber: '',
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        status: 'Sample Received',
        dateBap: '',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateWgs: '',
        qcStatus: 'Pending'
      };
      setSamples([...samples, newSample]);
      setShowAddForm(false);
      setFormData({
        id: '',
        species: 'E.coli',
        dateReceived: new Date().toISOString().split('T')[0],
        initials: '',
        freezerLocation: '',
        notes: ''
      });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">Add New Sample</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Sample ID</label>
              <input
                type="text"
                required
                value={formData.id}
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="25KS01XX01-XX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Species</label>
              <select
                value={formData.species}
                onChange={(e) => setFormData({...formData, species: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="E.coli">E.coli</option>
                <option value="Salmonella">Salmonella</option>
                <option value="Campylobacter">Campylobacter</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date Received</label>
              <input
                type="date"
                required
                value={formData.dateReceived}
                onChange={(e) => setFormData({...formData, dateReceived: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Initials</label>
              <input
                type="text"
                required
                maxLength={3}
                value={formData.initials}
                onChange={(e) => setFormData({...formData, initials: e.target.value.toUpperCase()})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="AMD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Freezer Location</label>
              <input
                type="text"
                value={formData.freezerLocation}
                onChange={(e) => setFormData({...formData, freezerLocation: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="F1-S2-R3-B1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Any additional notes..."
              />
            </div>
            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Add Sample
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProcessStepForm = () => {
    const [formData, setFormData] = useState(() => ({
      stepNumber: generateNextNumber(processStep, samples),
      initials: '',
      notes: '',
      qcPass: true,
      // BAP lot numbers
      plateMedia: 'PM2025003',
      incubator: 'INC-A1',
      // TSB lot numbers
      tsbMedia: 'TSB2025002',
      tsbIncubator: 'INC-A1',
      // Extraction lot numbers
      aw1: '57805759',
      aw2: '57804898',
      etoh: '23-50-7 250112',
      bufferAL: '57802729',
      bufferATL: '57802643',
      proteinaseK: '178025280',
      bufferAE: '57804900',
      spinColumn: '175037916',
      qiacubeRun: '25-3',
      // Index lot numbers
      tdBuffer: 'TD2025001',
      atmntBuffer: 'ATM2025001',
      npmBuffer: 'NPM2025001',
      resuspensionBuffer: 'RSP2025001',
      indexesKit: 'IK2025001',
      i5Indexes: 'I52025001',
      i5TimesThawed: '2',
      i7Indexes: 'I72025001',
      i7TimesThawed: '1',
      beadType: 'SPRI',
      beadLot: 'SPRI2025001',
      etohLot: 'ETH2025001',
      nfH2oLot: 'NFH2025001',
      plateNumber: 'PLT-001',
      wellId: 'A01',
      qubitReagent: 'QBT2025001',
      // Cleanup lot numbers
      cleanupBeadType: 'SPRI',
      cleanupBeadLot: 'SPRI2025001',
      cleanupNfH2o: 'NFH2025001',
      cleanupEtohDilution: 'ETH2025001',
      cleanupNfH2oElution: 'NFH2025002',
      cleanupElutionVolume: '30',
      cleanupWellId: 'A01',
      cleanupStorage: 'Plate',
      cleanupQubitReagent: 'QBT2025001',
      cleanupBoxNumber: 'BOX-001',
      cleanupFreezerNumber: '1',
      cleanupShelfNumber: '2',
      cleanupRackNumber: '3',
      cleanupDrawerNumber: '1',
      // WGS data
      r1File: 'sample_R1.fastq.gz',
      r2File: 'sample_R2.fastq.gz',
      bioSampleSub: 'BS2025001',
      samnNumber: 'SAMN12345678',
      sraSub: 'SRA2025001',
      srrNumber: 'SRR9876543'
    }));

    const handleSubmit = () => {
      if (!formData.initials) {
        alert('Please enter your initials');
        return;
      }

      const updatedSample = { ...processingSample };
      const today = new Date().toISOString().split('T')[0];
      
      switch(processStep) {
        case 'BAP':
          updatedSample.bapNumber = formData.stepNumber;
          updatedSample.bapLotNumbers = {
            plateMedia: formData.plateMedia,
            incubator: formData.incubator
          };
          updatedSample.dateBap = today;
          updatedSample.status = 'BAP Complete';
          break;
        case 'TSB':
          updatedSample.tsbNumber = formData.stepNumber;
          updatedSample.tsbLotNumbers = {
            tsbMedia: formData.tsbMedia,
            incubator: formData.tsbIncubator
          };
          updatedSample.dateTsb = today;
          updatedSample.status = 'TSB Complete';
          break;
        case 'Extraction':
          updatedSample.extractionNumber = formData.stepNumber;
          updatedSample.extractionLotNumbers = {
            aw1: formData.aw1,
            aw2: formData.aw2,
            etoh: formData.etoh,
            bufferAL: formData.bufferAL,
            bufferATL: formData.bufferATL,
            proteinaseK: formData.proteinaseK,
            bufferAE: formData.bufferAE,
            spinColumn: formData.spinColumn,
            qiacubeRun: formData.qiacubeRun
          };
          updatedSample.dateExtraction = today;
          updatedSample.status = 'Extraction Complete';
          break;
        case 'Dilution':
          updatedSample.dilutionNumber = formData.stepNumber;
          updatedSample.dateDilution = today;
          updatedSample.status = 'Dilution Complete';
          break;
        case 'Cleanup':
          updatedSample.cleanupNumber = formData.stepNumber;
          updatedSample.cleanupLotNumbers = {
            beadType: formData.cleanupBeadType,
            beadLot: formData.cleanupBeadLot,
            nfH2o: formData.cleanupNfH2o,
            etohDilution: formData.cleanupEtohDilution,
            nfH2oElution: formData.cleanupNfH2oElution,
            elutionVolume: formData.cleanupElutionVolume,
            wellId: formData.cleanupWellId,
            storage: formData.cleanupStorage,
            qubitReagent: formData.cleanupQubitReagent,
            boxNumber: formData.cleanupBoxNumber,
            freezerNumber: formData.cleanupFreezerNumber,
            shelfNumber: formData.cleanupShelfNumber,
            rackNumber: formData.cleanupRackNumber,
            drawerNumber: formData.cleanupDrawerNumber
          };
          updatedSample.dateCleanup = today;
          updatedSample.status = 'Cleanup Complete';
          break;
        case 'Index':
          updatedSample.indexNumber = formData.stepNumber;
          updatedSample.indexLotNumbers = {
            tdBuffer: formData.tdBuffer,
            atmntBuffer: formData.atmntBuffer,
            npmBuffer: formData.npmBuffer,
            resuspensionBuffer: formData.resuspensionBuffer,
            indexesKit: formData.indexesKit,
            i5Indexes: formData.i5Indexes,
            i5TimesThawed: formData.i5TimesThawed,
            i7Indexes: formData.i7Indexes,
            i7TimesThawed: formData.i7TimesThawed,
            beadType: formData.beadType,
            beadLot: formData.beadLot,
            etohLot: formData.etohLot,
            nfH2oLot: formData.nfH2oLot,
            plateNumber: formData.plateNumber,
            wellId: formData.wellId,
            qubitReagent: formData.qubitReagent
          };
          updatedSample.dateIndex = today;
          updatedSample.status = 'Index Complete';
          break;
        case 'WGS':
          updatedSample.wgsData = {
            r1File: formData.r1File,
            r2File: formData.r2File,
            bioSampleSub: formData.bioSampleSub,
            samnNumber: formData.samnNumber,
            sraSub: formData.sraSub,
            srrNumber: formData.srrNumber
          };
          updatedSample.dateWgs = today;
          updatedSample.status = 'WGS Complete';
          break;
        default:
          break;
      }
      
      updatedSample.qcStatus = formData.qcPass ? 'Pass' : 'Fail';
      if (formData.notes) {
        updatedSample.notes = formData.notes;
      }

      const updatedSamples = samples.map(s => 
        s.id === processingSample.id ? updatedSample : s
      );
      setSamples(updatedSamples);
      
      setShowProcessForm(false);
      setProcessingSample(null);
      setProcessStep('');
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h3 className="text-lg font-semibold mb-4">
            Process {processStep} - {processingSample?.id}
          </h3>
          
          {/* Debug info - we can remove this later */}
          <div className="text-xs text-gray-500 mb-2">
            Current step: {processStep} | Sample status: {processingSample?.status}
          </div>
          
          <div className="space-y-4">
            {processStep !== 'WGS' && (
              <div>
                <label className="block text-sm font-medium mb-1">{processStep} Number</label>
                <input
                  type="text"
                  value={formData.stepNumber}
                  onChange={(e) => setFormData({...formData, stepNumber: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            
            {/* WGS Data */}
            {processStep === 'WGS' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">WGS Tracking Data</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">R1 File</label>
                    <input
                      type="text"
                      value={formData.r1File}
                      onChange={(e) => setFormData({...formData, r1File: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="sample_R1.fastq.gz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">R2 File</label>
                    <input
                      type="text"
                      value={formData.r2File}
                      onChange={(e) => setFormData({...formData, r2File: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="sample_R2.fastq.gz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BioSample Sub #</label>
                    <input
                      type="text"
                      value={formData.bioSampleSub}
                      onChange={(e) => setFormData({...formData, bioSampleSub: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="BS2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">SAMN#</label>
                    <input
                      type="text"
                      value={formData.samnNumber}
                      onChange={(e) => setFormData({...formData, samnNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="SAMN12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">SRA Sub #</label>
                    <input
                      type="text"
                      value={formData.sraSub}
                      onChange={(e) => setFormData({...formData, sraSub: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="SRA2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">SRR#</label>
                    <input
                      type="text"
                      value={formData.srrNumber}
                      onChange={(e) => setFormData({...formData, srrNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="SRR9876543"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Cleanup Lot Numbers */}
            {processStep === 'Cleanup' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">Clean up Lot Numbers</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Bead Type</label>
                    <select
                      value={formData.cleanupBeadType}
                      onChange={(e) => setFormData({...formData, cleanupBeadType: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="SPRI">SPRI</option>
                      <option value="AMPure">AMPure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bead Lot</label>
                    <input
                      type="text"
                      value={formData.cleanupBeadLot}
                      onChange={(e) => setFormData({...formData, cleanupBeadLot: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="SPRI2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">NF H2O</label>
                    <input
                      type="text"
                      value={formData.cleanupNfH2o}
                      onChange={(e) => setFormData({...formData, cleanupNfH2o: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="NFH2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">EtOH Dilution</label>
                    <input
                      type="text"
                      value={formData.cleanupEtohDilution}
                      onChange={(e) => setFormData({...formData, cleanupEtohDilution: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ETH2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">NF H2O Elution</label>
                    <input
                      type="text"
                      value={formData.cleanupNfH2oElution}
                      onChange={(e) => setFormData({...formData, cleanupNfH2oElution: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="NFH2025002"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Elution Volume (μL)</label>
                    <input
                      type="number"
                      value={formData.cleanupElutionVolume}
                      onChange={(e) => setFormData({...formData, cleanupElutionVolume: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="30"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Well ID</label>
                    <input
                      type="text"
                      value={formData.cleanupWellId}
                      onChange={(e) => setFormData({...formData, cleanupWellId: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="A01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Storage</label>
                    <select
                      value={formData.cleanupStorage}
                      onChange={(e) => setFormData({...formData, cleanupStorage: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Plate">Plate</option>
                      <option value="Tube">Tube</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Qubit Reagent</label>
                    <input
                      type="text"
                      value={formData.cleanupQubitReagent}
                      onChange={(e) => setFormData({...formData, cleanupQubitReagent: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="QBT2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Box Number</label>
                    <input
                      type="text"
                      value={formData.cleanupBoxNumber}
                      onChange={(e) => setFormData({...formData, cleanupBoxNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="BOX-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Freezer Number</label>
                    <input
                      type="text"
                      value={formData.cleanupFreezerNumber}
                      onChange={(e) => setFormData({...formData, cleanupFreezerNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Shelf Number</label>
                    <input
                      type="text"
                      value={formData.cleanupShelfNumber}
                      onChange={(e) => setFormData({...formData, cleanupShelfNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Rack Number</label>
                    <input
                      type="text"
                      value={formData.cleanupRackNumber}
                      onChange={(e) => setFormData({...formData, cleanupRackNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Drawer Number</label>
                    <input
                      type="text"
                      value={formData.cleanupDrawerNumber}
                      onChange={(e) => setFormData({...formData, cleanupDrawerNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Index Lot Numbers */}
            {processStep === 'Index' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">XT Index Lot Numbers</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">TD Buffer</label>
                    <input
                      type="text"
                      value={formData.tdBuffer}
                      onChange={(e) => setFormData({...formData, tdBuffer: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="TD2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">ATMNT Buffer</label>
                    <input
                      type="text"
                      value={formData.atmntBuffer}
                      onChange={(e) => setFormData({...formData, atmntBuffer: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ATM2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">NPM Buffer</label>
                    <input
                      type="text"
                      value={formData.npmBuffer}
                      onChange={(e) => setFormData({...formData, npmBuffer: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="NPM2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Resuspension Buffer</label>
                    <input
                      type="text"
                      value={formData.resuspensionBuffer}
                      onChange={(e) => setFormData({...formData, resuspensionBuffer: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="RSP2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Indexes Kit Lot</label>
                    <input
                      type="text"
                      value={formData.indexesKit}
                      onChange={(e) => setFormData({...formData, indexesKit: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="IK2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">i5 Indexes</label>
                    <input
                      type="text"
                      value={formData.i5Indexes}
                      onChange={(e) => setFormData({...formData, i5Indexes: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="I52025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">i5 Times Thawed</label>
                    <input
                      type="number"
                      value={formData.i5TimesThawed}
                      onChange={(e) => setFormData({...formData, i5TimesThawed: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">i7 Indexes</label>
                    <input
                      type="text"
                      value={formData.i7Indexes}
                      onChange={(e) => setFormData({...formData, i7Indexes: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="I72025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">i7 Times Thawed</label>
                    <input
                      type="number"
                      value={formData.i7TimesThawed}
                      onChange={(e) => setFormData({...formData, i7TimesThawed: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bead Type</label>
                    <select
                      value={formData.beadType}
                      onChange={(e) => setFormData({...formData, beadType: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="SPRI">SPRI</option>
                      <option value="AMPure">AMPure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Bead Lot</label>
                    <input
                      type="text"
                      value={formData.beadLot}
                      onChange={(e) => setFormData({...formData, beadLot: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="SPRI2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">EtOH Lot</label>
                    <input
                      type="text"
                      value={formData.etohLot}
                      onChange={(e) => setFormData({...formData, etohLot: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ETH2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">NF H2O Lot</label>
                    <input
                      type="text"
                      value={formData.nfH2oLot}
                      onChange={(e) => setFormData({...formData, nfH2oLot: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="NFH2025001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Plate Number</label>
                    <input
                      type="text"
                      value={formData.plateNumber}
                      onChange={(e) => setFormData({...formData, plateNumber: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="PLT-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Well ID</label>
                    <input
                      type="text"
                      value={formData.wellId}
                      onChange={(e) => setFormData({...formData, wellId: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="A01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Qubit Reagent</label>
                    <input
                      type="text"
                      value={formData.qubitReagent}
                      onChange={(e) => setFormData({...formData, qubitReagent: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="QBT2025001"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Extraction Lot Numbers */}
            {processStep === 'Extraction' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">Extraction Lot Numbers</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">AW1</label>
                    <input
                      type="text"
                      value={formData.aw1}
                      onChange={(e) => setFormData({...formData, aw1: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="57805759"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">AW2</label>
                    <input
                      type="text"
                      value={formData.aw2}
                      onChange={(e) => setFormData({...formData, aw2: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="57804898"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">EtOH</label>
                    <input
                      type="text"
                      value={formData.etoh}
                      onChange={(e) => setFormData({...formData, etoh: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="23-50-7 250112"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Buffer AL</label>
                    <input
                      type="text"
                      value={formData.bufferAL}
                      onChange={(e) => setFormData({...formData, bufferAL: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="57802729"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Buffer ATL</label>
                    <input
                      type="text"
                      value={formData.bufferATL}
                      onChange={(e) => setFormData({...formData, bufferATL: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="57802643"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Proteinase K</label>
                    <input
                      type="text"
                      value={formData.proteinaseK}
                      onChange={(e) => setFormData({...formData, proteinaseK: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="178025280"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Buffer AE</label>
                    <input
                      type="text"
                      value={formData.bufferAE}
                      onChange={(e) => setFormData({...formData, bufferAE: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="57804900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Spin Column</label>
                    <input
                      type="text"
                      value={formData.spinColumn}
                      onChange={(e) => setFormData({...formData, spinColumn: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="175037916"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Qiacube Run</label>
                    <input
                      type="text"
                      value={formData.qiacubeRun}
                      onChange={(e) => setFormData({...formData, qiacubeRun: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="25-1"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* TSB Lot Numbers */}
            {processStep === 'TSB' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">TSB Lot Numbers</h4>
                <div>
                  <label className="block text-sm font-medium mb-1">TSB Media Lot</label>
                  <input
                    type="text"
                    value={formData.tsbMedia}
                    onChange={(e) => setFormData({...formData, tsbMedia: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="TSB2025001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Incubator</label>
                  <select
                    value={formData.tsbIncubator}
                    onChange={(e) => setFormData({...formData, tsbIncubator: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="INC-A1">INC-A1</option>
                    <option value="INC-A2">INC-A2</option>
                    <option value="INC-B1">INC-B1</option>
                    <option value="INC-B2">INC-B2</option>
                  </select>
                </div>
              </div>
            )}
            
            {/* BAP Lot Numbers */}
            {processStep === 'BAP' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">BAP Lot Numbers</h4>
                <div>
                  <label className="block text-sm font-medium mb-1">Plate Media Lot</label>
                  <input
                    type="text"
                    value={formData.plateMedia}
                    onChange={(e) => setFormData({...formData, plateMedia: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="PM2025001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Incubator</label>
                  <select
                    value={formData.incubator}
                    onChange={(e) => setFormData({...formData, incubator: e.target.value})}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="INC-A1">INC-A1</option>
                    <option value="INC-A2">INC-A2</option>
                    <option value="INC-B1">INC-B1</option>
                    <option value="INC-B2">INC-B2</option>
                  </select>
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-1">Your Initials</label>
              <input
                type="text"
                required
                maxLength={3}
                value={formData.initials}
                onChange={(e) => setFormData({...formData, initials: e.target.value.toUpperCase()})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="AMD"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">QC Result</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={formData.qcPass}
                    onChange={() => setFormData({...formData, qcPass: true})}
                    className="mr-2"
                  />
                  Pass
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!formData.qcPass}
                    onChange={() => setFormData({...formData, qcPass: false})}
                    className="mr-2"
                  />
                  Fail
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Notes (optional)</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Any additional notes..."
              />
            </div>
            
            <div className="flex gap-2 pt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Complete {processStep}
              </button>
              <button
                onClick={() => setShowProcessForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SampleDetailModal = ({ sample, onClose }) => {
    if (!sample) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{sample.id}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Species</label>
              <p className="text-lg">{sample.species}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Status</label>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sample.status)}`}>
                {sample.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Date Received</label>
              <p>{sample.dateReceived}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">BAP Date</label>
              <p>{sample.dateBap || 'Not processed'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">TSB Date</label>
              <p>{sample.dateTsb || 'Not processed'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Extraction Date</label>
              <p>{sample.dateExtraction || 'Not processed'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">BAP Number</label>
              <p>{sample.bapNumber || 'Not assigned'}</p>
            </div>
            {sample.bapLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">BAP Plate Media</label>
                <p>{sample.bapLotNumbers.plateMedia}</p>
              </div>
            )}
            {sample.bapLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">BAP Incubator</label>
                <p>{sample.bapLotNumbers.incubator}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-500">TSB Number</label>
              <p>{sample.tsbNumber || 'Not assigned'}</p>
            </div>
            {sample.tsbLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">TSB Media</label>
                <p>{sample.tsbLotNumbers.tsbMedia}</p>
              </div>
            )}
            {sample.tsbLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">TSB Incubator</label>
                <p>{sample.tsbLotNumbers.incubator}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-500">Extraction Number</label>
              <p>{sample.extractionNumber || 'Not extracted'}</p>
            </div>
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">AW1 Lot</label>
                <p>{sample.extractionLotNumbers.aw1}</p>
              </div>
            )}
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">AW2 Lot</label>
                <p>{sample.extractionLotNumbers.aw2}</p>
              </div>
            )}
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">EtOH Lot</label>
                <p>{sample.extractionLotNumbers.etoh}</p>
              </div>
            )}
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Buffer AL Lot</label>
                <p>{sample.extractionLotNumbers.bufferAL}</p>
              </div>
            )}
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Proteinase K Lot</label>
                <p>{sample.extractionLotNumbers.proteinaseK}</p>
              </div>
            )}
            {sample.extractionLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Qiacube Run</label>
                <p>{sample.extractionLotNumbers.qiacubeRun}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-500">Dilution Number</label>
              <p>{sample.dilutionNumber || 'Not diluted'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Cleanup Number</label>
              <p>{sample.cleanupNumber || 'Not cleaned'}</p>
            </div>
            {sample.cleanupLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Cleanup Bead Type & Lot</label>
                <p>{sample.cleanupLotNumbers.beadType} - {sample.cleanupLotNumbers.beadLot}</p>
              </div>
            )}
            {sample.cleanupLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Elution Volume</label>
                <p>{sample.cleanupLotNumbers.elutionVolume} μL</p>
              </div>
            )}
            {sample.cleanupLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Storage & Well</label>
                <p>{sample.cleanupLotNumbers.storage} - {sample.cleanupLotNumbers.wellId}</p>
              </div>
            )}
            {sample.cleanupLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Storage Location</label>
                <p>F{sample.cleanupLotNumbers.freezerNumber}-S{sample.cleanupLotNumbers.shelfNumber}-R{sample.cleanupLotNumbers.rackNumber}-D{sample.cleanupLotNumbers.drawerNumber}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-500">Index Number</label>
              <p>{sample.indexNumber || 'Not indexed'}</p>
            </div>
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">TD Buffer</label>
                <p>{sample.indexLotNumbers.tdBuffer}</p>
              </div>
            )}
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">ATMNT Buffer</label>
                <p>{sample.indexLotNumbers.atmntBuffer}</p>
              </div>
            )}
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">i5 Indexes</label>
                <p>{sample.indexLotNumbers.i5Indexes} (thawed {sample.indexLotNumbers.i5TimesThawed}x)</p>
              </div>
            )}
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">i7 Indexes</label>
                <p>{sample.indexLotNumbers.i7Indexes} (thawed {sample.indexLotNumbers.i7TimesThawed}x)</p>
              </div>
            )}
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Bead Type & Lot</label>
                <p>{sample.indexLotNumbers.beadType} - {sample.indexLotNumbers.beadLot}</p>
              </div>
            )}
            {sample.indexLotNumbers && (
              <div>
                <label className="block text-sm font-medium text-gray-500">Plate & Well</label>
                <p>{sample.indexLotNumbers.plateNumber} - {sample.indexLotNumbers.wellId}</p>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-500">Initials</label>
              <p>{sample.initials}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Freezer Location</label>
              <p>{sample.freezerLocation || 'Not specified'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">QC Status</label>
              <p className={getQCColor(sample.qcStatus)}>{sample.qcStatus}</p>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-500">Notes</label>
              <p className="mt-1">{sample.notes || 'No notes'}</p>
            </div>
            {sample.wgsData && (
              <div>
                <label className="block text-sm font-medium text-gray-500">R1 File</label>
                <p>{sample.wgsData.r1File}</p>
              </div>
            )}
            {sample.wgsData && (
              <div>
                <label className="block text-sm font-medium text-gray-500">R2 File</label>
                <p>{sample.wgsData.r2File}</p>
              </div>
            )}
            {sample.wgsData && (
              <div>
                <label className="block text-sm font-medium text-gray-500">SAMN#</label>
                <p>{sample.wgsData.samnNumber}</p>
              </div>
            )}
            {sample.wgsData && (
              <div>
                <label className="block text-sm font-medium text-gray-500">SRR#</label>
                <p>{sample.wgsData.srrNumber}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const stats = {
    total: samples.length,
    pending: samples.filter(s => s.status === 'Sample Received').length,
    inProgress: samples.filter(s => ['BAP Complete', 'TSB Complete', 'Extraction Complete', 'Dilution Complete', 'Cleanup Complete', 'Index Complete'].includes(s.status)).length,
    completed: samples.filter(s => s.status === 'WGS Complete').length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sample Tracker</h1>
              <p className="text-gray-600 mt-1">Laboratory sample management system</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add Sample
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Samples</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <FileText className="text-gray-400" size={24} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <Calendar className="text-orange-400" size={24} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
              </div>
              <User className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <FileText className="text-green-400" size={24} />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search samples..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Species</option>
              <option value="E.coli">E.coli</option>
              <option value="Salmonella">Salmonella</option>
              <option value="Campylobacter">Campylobacter</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Statuses</option>
              <option value="Sample Received">Sample Received</option>
              <option value="BAP Complete">BAP Complete</option>
              <option value="TSB Complete">TSB Complete</option>
              <option value="Extraction Complete">Extraction Complete</option>
              <option value="Dilution Complete">Dilution Complete</option>
              <option value="Cleanup Complete">Cleanup Complete</option>
              <option value="Index Complete">Index Complete</option>
              <option value="WGS Complete">WGS Complete</option>
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Download size={20} />
              Export
            </button>
          </div>
        </div>

        {/* Samples Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sample ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Species</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Received</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QC</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSamples.map((sample) => (
                  <tr key={sample.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{sample.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{sample.species}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sample.status)}`}>
                        {sample.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{sample.dateReceived}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {sample.freezerLocation || 'Not set'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-medium ${getQCColor(sample.qcStatus)}`}>
                        {sample.qcStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedSample(sample)}
                          className="text-blue-600 hover:text-blue-800"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-800"
                          title="Edit Sample"
                        >
                          <Edit size={16} />
                        </button>
                        {getNextStep(sample.status) && (
                          <button
                            onClick={() => {
                              setProcessingSample(sample);
                              setProcessStep(getNextStep(sample.status));
                              setShowProcessForm(true);
                            }}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors"
                            title={getNextStepLabel(sample.status)}
                          >
                            {getNextStepLabel(sample.status)}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modals */}
        {showAddForm && <AddSampleForm />}
        {showProcessForm && <ProcessStepForm />}
        {selectedSample && (
          <SampleDetailModal 
            sample={selectedSample} 
            onClose={() => setSelectedSample(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default SampleTracker;
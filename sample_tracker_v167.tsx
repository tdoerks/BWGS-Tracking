import React, { useState, useEffect } from 'react';
import { Search, Plus, Eye, Edit, Calendar, MapPin, User, FileText, Download } from 'lucide-react';

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

  useEffect(() => {
    const initialSamples = [
      {
        id: '25KS01CB02-EC',
        species: 'E.coli',
        bapNumber: '25B019',
        tsbNumber: '25T019',
        extractionNumber: '25E019',
        dilutionNumber: '25D019',
        cleanupNumber: '25C019',
        indexNumber: '25I019',
        miseqQcData: {
          contigs: '142',
          length: '4.8M',
          estCov: '45.2',
          meanQ_R1: '32.1',
          meanQ_R2: '29.8',
          scheme: 'Nextera',
          runDate: '2025-01-21',
          qcPass: true,
          reviewer: 'AMD'
        },
        status: 'WGS Complete',
        dateReceived: '2025-01-15',
        dateBap: '2025-01-16',
        dateTsb: '2025-01-17',
        dateExtraction: '2025-01-18',
        dateDilution: '2025-01-19',
        dateCleanup: '2025-01-20',
        dateIndex: '2025-01-21',
        dateMiseqQc: '2025-01-21',
        dateWgs: '2025-01-22',
        initials: 'AMD',
        freezerLocation: 'F1-S2-R3-B1',
        notes: 'High quality DNA',
        qcStatus: 'Pass'
      },
      {
        id: '25KS01GT01-S1',
        species: 'Salmonella',
        bapNumber: '25B020',
        tsbNumber: '25T020',
        extractionNumber: '25E020',
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        miseqQcData: null,
        status: 'Extraction Complete',
        dateReceived: '2025-01-16',
        dateBap: '2025-01-17',
        dateTsb: '2025-01-18',
        dateExtraction: '2025-01-19',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateMiseqQc: '',
        dateWgs: '',
        initials: 'TD',
        freezerLocation: 'F1-S2-R3-B2',
        notes: 'Ready for dilution',
        qcStatus: 'Pass'
      },
      {
        id: '25KS01GT02-EC',
        species: 'E.coli',
        bapNumber: '25B021',
        tsbNumber: '',
        extractionNumber: '',
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        miseqQcData: null,
        status: 'BAP Complete',
        dateReceived: '2025-01-17',
        dateBap: '2025-01-18',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateMiseqQc: '',
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
        tsbNumber: '',
        extractionNumber: '',
        dilutionNumber: '',
        cleanupNumber: '',
        indexNumber: '',
        miseqQcData: null,
        status: 'Sample Received',
        dateReceived: '2025-01-18',
        dateBap: '',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateMiseqQc: '',
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

  useEffect(() => {
    let filtered = samples.filter(item => 
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSpecies !== 'all') {
      filtered = filtered.filter(item => item.species === selectedSpecies);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(item => item.status === selectedStatus);
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
      'MiSeq QC Complete': 'bg-teal-100 text-teal-800',
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
      'Index Complete': 'MiSeq QC',
      'MiSeq QC Complete': 'WGS'
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
      'Index Complete': 'Start MiSeq QC',
      'MiSeq QC Complete': 'Complete WGS'
    };
    return labels[currentStatus];
  };

  const generateNextNumber = (step) => {
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
    return prefix[step] + String(nextNumber).padStart(3, '0');
  };

  const calculateQCResult = (species, contigs, length, estCov, meanQ_R1, meanQ_R2) => {
    const contigsNum = parseInt(contigs);
    const lengthMbp = parseFloat(length.replace('M', '').replace('bp', ''));
    const coverage = parseFloat(estCov);
    const q1 = parseFloat(meanQ_R1);
    const q2 = parseFloat(meanQ_R2);
    
    if (species === 'E.coli') {
      const contigsPass = contigsNum <= 500;
      const lengthPass = lengthMbp >= 4.5 && lengthMbp <= 5.9;
      const coveragePass = coverage >= 40;
      const q1Pass = q1 >= 30;
      const q2Pass = q2 >= 30;
      
      return {
        pass: contigsPass && lengthPass && coveragePass && q1Pass && q2Pass,
        details: {
          contigs: { value: contigsNum, pass: contigsPass, threshold: '≤500' },
          length: { value: lengthMbp, pass: lengthPass, threshold: '4.5-5.9 Mbp' },
          coverage: { value: coverage, pass: coveragePass, threshold: '≥40x' },
          meanQ_R1: { value: q1, pass: q1Pass, threshold: '≥30' },
          meanQ_R2: { value: q2, pass: q2Pass, threshold: '≥30' }
        }
      };
    }
    
    if (species === 'Salmonella') {
      const contigsPass = contigsNum <= 300;
      const lengthPass = lengthMbp >= 4.3 && lengthMbp <= 5.2;
      const coveragePass = coverage >= 30;
      const q1Pass = q1 >= 30;
      const q2Pass = q2 >= 30;
      
      return {
        pass: contigsPass && lengthPass && coveragePass && q1Pass && q2Pass,
        details: {
          contigs: { value: contigsNum, pass: contigsPass, threshold: '≤300' },
          length: { value: lengthMbp, pass: lengthPass, threshold: '4.3-5.2 Mbp' },
          coverage: { value: coverage, pass: coveragePass, threshold: '≥30x' },
          meanQ_R1: { value: q1, pass: q1Pass, threshold: '≥30' },
          meanQ_R2: { value: q2, pass: q2Pass, threshold: '≥30' }
        }
      };
    }
    
    if (species === 'Campylobacter') {
      const contigsPass = contigsNum <= 300;
      const lengthPass = lengthMbp >= 1.5 && lengthMbp <= 1.9;
      const coveragePass = coverage >= 20;
      const q1Pass = q1 >= 30;
      const q2Pass = q2 >= 30;
      
      return {
        pass: contigsPass && lengthPass && coveragePass && q1Pass && q2Pass,
        details: {
          contigs: { value: contigsNum, pass: contigsPass, threshold: '≤300' },
          length: { value: lengthMbp, pass: lengthPass, threshold: '1.5-1.9 Mbp' },
          coverage: { value: coverage, pass: coveragePass, threshold: '≥20x' },
          meanQ_R1: { value: q1, pass: q1Pass, threshold: '≥30' },
          meanQ_R2: { value: q2, pass: q2Pass, threshold: '≥30' }
        }
      };
    }
    
    return { pass: null, details: null };
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
        miseqQcData: null,
        status: 'Sample Received',
        dateBap: '',
        dateTsb: '',
        dateExtraction: '',
        dateDilution: '',
        dateCleanup: '',
        dateIndex: '',
        dateMiseqQc: '',
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
    const [formData, setFormData] = useState({
      stepNumber: generateNextNumber(processStep),
      initials: '',
      notes: '',
      qcPass: true,
      contigs: '',
      length: '',
      estCov: '',
      meanQ_R1: '',
      meanQ_R2: '',
      scheme: 'Nextera',
      runDate: new Date().toISOString().split('T')[0]
    });

    const [qcResult, setQcResult] = useState(null);

    React.useEffect(() => {
      if (processStep === 'MiSeq QC' && processingSample && 
          formData.contigs && formData.length && formData.estCov && 
          formData.meanQ_R1 && formData.meanQ_R2) {
        const result = calculateQCResult(
          processingSample.species,
          formData.contigs,
          formData.length,
          formData.estCov,
          formData.meanQ_R1,
          formData.meanQ_R2
        );
        setQcResult(result);
        if (result && result.pass !== null) {
          setFormData(prev => ({ ...prev, qcPass: result.pass }));
        }
      } else {
        setQcResult(null);
      }
    }, [formData.contigs, formData.length, formData.estCov, formData.meanQ_R1, formData.meanQ_R2, processStep, processingSample]);

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
          updatedSample.dateBap = today;
          updatedSample.status = 'BAP Complete';
          break;
        case 'TSB':
          updatedSample.tsbNumber = formData.stepNumber;
          updatedSample.dateTsb = today;
          updatedSample.status = 'TSB Complete';
          break;
        case 'Extraction':
          updatedSample.extractionNumber = formData.stepNumber;
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
          updatedSample.dateCleanup = today;
          updatedSample.status = 'Cleanup Complete';
          break;
        case 'Index':
          updatedSample.indexNumber = formData.stepNumber;
          updatedSample.dateIndex = today;
          updatedSample.status = 'Index Complete';
          break;
        case 'MiSeq QC':
          updatedSample.miseqQcData = {
            contigs: formData.contigs,
            length: formData.length,
            estCov: formData.estCov,
            meanQ_R1: formData.meanQ_R1,
            meanQ_R2: formData.meanQ_R2,
            scheme: formData.scheme,
            runDate: formData.runDate,
            qcPass: formData.qcPass,
            reviewer: formData.initials
          };
          updatedSample.dateMiseqQc = today;
          updatedSample.status = formData.qcPass ? 'MiSeq QC Complete' : 'QC Failed';
          break;
        case 'WGS':
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
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">
            Process {processStep} - {processingSample?.id}
          </h3>
          
          <div className="space-y-4">
            {processStep !== 'WGS' && processStep !== 'MiSeq QC' && (
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
            
            {processStep === 'MiSeq QC' && (
              <div className="space-y-3 border-t pt-3 mt-4">
                <h4 className="font-medium text-gray-700">MiSeq QC Data</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Contigs</label>
                    <input
                      type="text"
                      value={formData.contigs}
                      onChange={(e) => setFormData({...formData, contigs: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="142"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Length</label>
                    <input
                      type="text"
                      value={formData.length}
                      onChange={(e) => setFormData({...formData, length: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="4.8M"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Est Cov</label>
                    <input
                      type="text"
                      value={formData.estCov}
                      onChange={(e) => setFormData({...formData, estCov: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="45.2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Mean Q R1</label>
                    <input
                      type="text"
                      value={formData.meanQ_R1}
                      onChange={(e) => setFormData({...formData, meanQ_R1: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="32.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Mean Q R2</label>
                    <input
                      type="text"
                      value={formData.meanQ_R2}
                      onChange={(e) => setFormData({...formData, meanQ_R2: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="29.8"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Scheme</label>
                    <select
                      value={formData.scheme}
                      onChange={(e) => setFormData({...formData, scheme: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Nextera">Nextera</option>
                      <option value="TruSeq">TruSeq</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-1">Run Date</label>
                    <input
                      type="date"
                      value={formData.runDate}
                      onChange={(e) => setFormData({...formData, runDate: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {qcResult && qcResult.details && (
                  <div className="mt-4 p-3 bg-gray-50 rounded border">
                    <h5 className="font-medium text-sm mb-2">{processingSample?.species} QC Analysis:</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(qcResult.details).map(([key, detail]) => (
                        <div key={key} className={'flex justify-between ' + (detail.pass ? 'text-green-700' : 'text-red-700')}>
                          <span>{key.replace('_', ' ')}: {detail.value}</span>
                          <span className={'font-medium ' + (detail.pass ? 'text-green-600' : 'text-red-600')}>
                            {detail.pass ? '✓' : '✗'} ({detail.threshold})
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className={'mt-2 font-medium ' + (qcResult.pass ? 'text-green-700' : 'text-red-700')}>
                      Overall: {qcResult.pass ? 'PASS - Ready for NCBI' : 'FAIL - Needs resequencing'}
                    </div>
                  </div>
                )}
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
            
            {processStep !== 'MiSeq QC' && (
              <div>
                <label className="block text-sm font-medium mb-1">QC Result</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
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
            )}
            
            {processStep === 'MiSeq QC' && (
              <div>
                <label className="block text-sm font-medium mb-1">QC Result</label>
                {(processingSample?.species === 'E.coli' || processingSample?.species === 'Salmonella' || processingSample?.species === 'Campylobacter') && qcResult && qcResult.pass !== null ? (
                  <div className={'p-2 rounded ' + (qcResult.pass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')}>
                    <strong>Auto-calculated: {qcResult.pass ? 'PASS' : 'FAIL'}</strong>
                    <p className="text-sm mt-1">
                      {qcResult.pass ? 'All ' + processingSample.species + ' QC thresholds met - Ready for NCBI submission' : 'QC thresholds not met - Needs resequencing'}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={formData.qcPass}
                        onChange={() => setFormData({...formData, qcPass: true})}
                        className="mr-2"
                      />
                      Pass (Ready for NCBI submission)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!formData.qcPass}
                        onChange={() => setFormData({...formData, qcPass: false})}
                        className="mr-2"
                      />
                      Fail (Needs resequencing)
                    </label>
                  </div>
                )}
              </div>
            )}
            
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
              <span className={'inline-block px-2 py-1 rounded-full text-xs font-medium ' + getStatusColor(sample.status)}>
                {sample.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Date Received</label>
              <p>{sample.dateReceived}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">QC Status</label>
              <p className={getQCColor(sample.qcStatus)}>{sample.qcStatus}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">BAP Number</label>
              <p>{sample.bapNumber || 'Not assigned'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">TSB Number</label>
              <p>{sample.tsbNumber || 'Not assigned'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Extraction Number</label>
              <p>{sample.extractionNumber || 'Not extracted'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Cleanup Number</label>
              <p>{sample.cleanupNumber || 'Not cleaned'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Index Number</label>
              <p>{sample.indexNumber || 'Not indexed'}</p>
            </div>
            {sample.miseqQcData && (
              <div>
                <label className="block text-sm font-medium text-gray-500">MiSeq QC</label>
                <p>Contigs: {sample.miseqQcData.contigs}, Cov: {sample.miseqQcData.estCov}</p>
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
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-500">Notes</label>
              <p className="mt-1">{sample.notes || 'No notes'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const stats = {
    total: samples.length,
    pending: samples.filter(s => s.status === 'Sample Received').length,
    inProgress: samples.filter(s => ['BAP Complete', 'TSB Complete', 'Extraction Complete', 'Dilution Complete', 'Cleanup Complete', 'Index Complete', 'MiSeq QC Complete'].includes(s.status)).length,
    completed: samples.filter(s => s.status === 'WGS Complete').length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
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
              <option value="MiSeq QC Complete">MiSeq QC Complete</option>
              <option value="WGS Complete">WGS Complete</option>
            </select>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Download size={20} />
              Export
            </button>
          </div>
        </div>

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
                {filteredSamples.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.species}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={'inline-block px-2 py-1 rounded-full text-xs font-medium ' + getStatusColor(item.status)}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{item.dateReceived}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.freezerLocation || 'Not set'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={'font-medium ' + getQCColor(item.qcStatus)}>
                        {item.qcStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedSample(item)}
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
                        {getNextStep(item.status) && (
                          <button
                            onClick={() => {
                              setProcessingSample(item);
                              setProcessStep(getNextStep(item.status));
                              setShowProcessForm(true);
                            }}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs hover:bg-green-200 transition-colors"
                            title={getNextStepLabel(item.status)}
                          >
                            {getNextStepLabel(item.status)}
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
                
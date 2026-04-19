/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ClipboardIcon, CheckIcon, SparklesIcon, UserIcon, IdentificationIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const GOVERNORATES = [
  { code: '01', name: 'Cairo' },
  { code: '02', name: 'Alexandria' },
  { code: '03', name: 'Port Said' },
  { code: '04', name: 'Suez' },
  { code: '11', name: 'Damietta' },
  { code: '12', name: 'Dakahlia' },
  { code: '13', name: 'Sharkia' },
  { code: '14', name: 'Kalyubia' },
  { code: '15', name: 'Kafr El Sheikh' },
  { code: '16', name: 'Gharbia' },
  { code: '17', name: 'Monufia' },
  { code: '18', name: 'Beheira' },
  { code: '19', name: 'Ismailia' },
  { code: '21', name: 'Giza' },
  { code: '22', name: 'Beni Suef' },
  { code: '23', name: 'Fayoum' },
  { code: '24', name: 'Minya' },
  { code: '25', name: 'Assiut' },
  { code: '26', name: 'Sohag' },
  { code: '27', name: 'Qena' },
  { code: '28', name: 'Aswan' },
  { code: '29', name: 'Luxor' },
  { code: '31', name: 'Red Sea' },
  { code: '32', name: 'New Valley' },
  { code: '33', name: 'Matrouh' },
  { code: '34', name: 'North Sinai' },
  { code: '35', name: 'South Sinai' },
];

const MALE_NAMES = ['Ahmed', 'Mohamed', 'Mahmoud', 'Ali', 'Ibrahim', 'Mostafa', 'Khaled', 'Youssef', 'Omar', 'Hassan'];
const FEMALE_NAMES = ['Fatma', 'Mona', 'Sara', 'Nour', 'Aya', 'Eman', 'Hager', 'Mariam', 'Habiba', 'Salma'];
const SURNAMES = ['Ahmed', 'Mohamed', 'Mansour', 'Said', 'Gamal', 'Hassan', 'Abbas', 'Khalil', 'Zaki', 'Mahmoud'];

export const DataGenerator: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const generateNationalID = () => {
    const century = Math.random() > 0.5 ? '3' : '2'; // 3 for 2000s, 2 for 1900s
    const year = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
    const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
    const govCode = GOVERNORATES[Math.floor(Math.random() * GOVERNORATES.length)].code;
    const sequence = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const check = Math.floor(Math.random() * 10).toString();
    return `${century}${year}${month}${day}${govCode}${sequence}${check}`;
  };

  const generatePhone = () => {
    const prefixes = ['010', '011', '012', '015'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const rest = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return `${prefix}${rest}`;
  };

  const [data, setData] = useState({
    nationalId: generateNationalID(),
    phone: generatePhone(),
    name: `${MALE_NAMES[0]} ${SURNAMES[0]}`,
    address: '15 El-Galaa St, Cairo, Egypt'
  });

  const refreshData = () => {
    const isMale = Math.random() > 0.5;
    const firstName = isMale ? MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)] : FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)];
    const lastName = SURNAMES[Math.floor(Math.random() * SURNAMES.length)];
    const gov = GOVERNORATES[Math.floor(Math.random() * GOVERNORATES.length)];
    
    setData({
      nationalId: generateNationalID(),
      phone: generatePhone(),
      name: `${firstName} ${lastName}`,
      address: `${Math.floor(Math.random() * 100 + 1)} Street Name, ${gov.name}, Egypt`
    });
  };

  const generateBookmarklet = () => {
    const script = `javascript:(function(){
      const data = {
        name: "${data.name}",
        nid: "${data.nationalId}",
        phone: "${data.phone}",
        address: "${data.address}"
      };
      const inputs = document.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        const name = (input.name || input.id || input.placeholder || "").toLowerCase();
        if(name.includes('id') || name.includes('national')) input.value = data.nid;
        if(name.includes('phone') || name.includes('mobile') || name.includes('tel')) input.value = data.phone;
        if(name.includes('name')) input.value = data.name;
        if(name.includes('address')) input.value = data.address;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      alert('Egypt Bot: Form autofilled with generated data!');
    })()`;
    return script.replace(/\s+/g, ' ');
  };

  const Field = ({ label, value, id, icon: Icon }: any) => (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 transition-all hover:bg-zinc-800/80 hover:border-zinc-700">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-wider">
          <Icon className="w-3.5 h-3.5" />
          {label}
        </div>
        <button 
          onClick={() => copyToClipboard(value, id)}
          className="text-zinc-500 hover:text-blue-400 transition-colors"
        >
          {copiedId === id ? <CheckIcon className="w-4 h-4 text-green-500" /> : <ClipboardIcon className="w-4 h-4" />}
        </button>
      </div>
      <div className="text-zinc-100 font-mono text-lg break-all">
        {value}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <IdentificationIcon className="w-6 h-6 text-blue-500" />
          Data Generator
        </h2>
        <button 
          onClick={refreshData}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium text-sm"
        >
          <SparklesIcon className="w-4 h-4" />
          Regenerate All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full Name" value={data.name} id="name" icon={UserIcon} />
        <Field label="Phone Number" value={data.phone} id="phone" icon={PhoneIcon} />
        <Field label="National ID" value={data.nationalId} id="nid" icon={IdentificationIcon} />
        <Field label="Address" value={data.address} id="address" icon={MapPinIcon} />
      </div>

      <div className="mt-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Browser Extension Alternative</h3>
            <p className="text-zinc-500 text-xs">Fill forms on any website with one click</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href={generateBookmarklet()}
            onClick={(e) => {
              if (e.currentTarget.href.startsWith('javascript:')) {
                // Prevent actually running it on our own page if clicked
                // e.preventDefault(); 
              }
            }}
            className="flex-shrink-0 px-6 py-3 bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-orange-500 rounded-xl transition-all font-bold text-sm cursor-move shadow-lg hover:shadow-orange-500/5"
          >
            Drag to Bookmarks Bar
          </a>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Drag this button to your browser's <span className="text-white font-medium">Bookmarks Bar</span>. 
            When you're on a form page, click it to instantly autofill the Egyptian data above.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
        <h3 className="text-blue-400 text-sm font-semibold mb-2 flex items-center gap-2">
          <IdentificationIcon className="w-4 h-4" />
          National ID Breakdown
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          The generated IDs follow the official Egyptian pattern: 
          <span className="text-zinc-200"> Century (1) + DOB (6) + Gov (2) + Sequence (4) + Check (1)</span>.
          Sequence digits determine gender (odd for male, even for female).
        </p>
      </div>
    </div>
  );
};

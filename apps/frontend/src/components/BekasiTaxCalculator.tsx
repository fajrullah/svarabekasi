// src/components/BekasiTaxCalculatorCard.tsx
"use client";
import { useState } from "react";

export default function BekasiTaxCalculatorCard() {
    const [plateNumber, setPlateNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("car");
    const [cc, setCC] = useState(1500);
    const [calculation, setCalculation] = useState<{
      baseTax: number;
      penalty?: number;
      total: number;
      vaNumber?: string;
    } | null>(null);
    const [isPaying, setIsPaying] = useState(false);
  
    // Mock payment function (replace with real VA aggregator API)
    const handlePayment = async () => {
      setIsPaying(true);
      
      // Simulate API call to payment gateway
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate random VA number (replace with real VA from your payment provider)
      const randomVA = `89308${Math.floor(1000000000 + Math.random() * 9000000000)}`;
      
      setCalculation(prev => ({
        ...prev!,
        vaNumber: randomVA
      }));
      setIsPaying(false);
    };

  // Bekasi-specific tax rates (adjust as needed)
  const calculateTax = () => {
    if (!plateNumber) return;

    let baseTax = 0;
    const currentYear = new Date().getFullYear();
    
    // Base calculation (example rates - verify with official sources)
    if (vehicleType === "car") {
      if (cc <= 1500) baseTax = 1500000;
      else if (cc <= 2500) baseTax = 2500000;
      else baseTax = 4000000;
    } else if (vehicleType === "motorcycle") {
      if (cc <= 250) baseTax = 150000;
      else baseTax = 300000;
    }

    // Check if plate ends with letter (assume older vehicle)
    const lastChar = plateNumber.slice(-1);
    const isOldVehicle = isNaN(parseInt(lastChar));
    const penalty = isOldVehicle ? baseTax * 0.2 : 0; // 20% penalty for old vehicles

    setCalculation({
      baseTax,
      penalty: penalty || undefined,
      total: baseTax + penalty
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="bg-green-600 p-4 text-white">
        <h2 className="text-xl font-bold text-center">Bekasi Vehicle Tax Calculator</h2>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Plate Number Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Plate Number (Bekasi)
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              B
            </span>
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
              placeholder="1234ABC"
              className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-green-500 focus:ring-green-500"
              maxLength={8}
            />
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
          >
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>

        {/* Engine CC */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Engine Capacity (CC)
          </label>
          <input
            type="number"
            value={cc}
            onChange={(e) => setCC(parseInt(e.target.value) || 0)}
            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateTax}
          disabled={!plateNumber}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Tax
        </button>

        {/* Results */}
        {calculation && (
          <div className="mt-6 space-y-3">
            <h3 className="font-medium text-lg">Tax Calculation Result:</h3>
            
            <div className="flex justify-between">
              <span>Base Tax:</span>
              <span>Rp {calculation.baseTax.toLocaleString("id-ID")}</span>
            </div>
            
            {calculation.penalty && (
              <div className="flex justify-between text-yellow-600">
                <span>Late Penalty (20%):</span>
                <span>Rp {calculation.penalty.toLocaleString("id-ID")}</span>
              </div>
            )}
            
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total Payable:</span>
              <span className="text-green-600">Rp {calculation.total.toLocaleString("id-ID")}</span>
            </div>
          </div>
        )}
      </div>

      {calculation && (
        <div className="p-4 bg-blue-50 border-t">
          {!calculation.vaNumber ? (
            <button
              onClick={handlePayment}
              disabled={isPaying}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2"
            >
              {isPaying ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                  Pay Now via VA Aggregator
                </>
              )}
            </button>
          ) : (
            <div className="text-center">
              <div className="mb-3 p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-sm text-gray-500">Virtual Account Number</p>
                <p className="text-xl font-mono font-bold text-blue-600">{calculation.vaNumber}</p>
                <p className="text-sm text-gray-500 mt-1">Expires in 24 hours</p>
              </div>
              <p className="text-sm text-gray-600">
                Pay via your mobile banking app using this VA number
              </p>
            </div>
          )}
        </div>
      )}

      {/* Footer Note */}
      <div className="bg-gray-50 p-4 border-t text-sm text-gray-500">
        <p>Note: This is an estimate. Verify with official Bekasi tax office for exact amounts.</p>
      </div>
    </div>
  );
}
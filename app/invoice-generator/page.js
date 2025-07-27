// "use client"
// import { useState, useRef } from 'react';
// import { FiDownload, FiPlus, FiTrash2, FiPrinter } from 'react-icons/fi';
// // import { jsPDF } from 'jspdf';
// // import html2canvas from 'html2canvas';

// export default function InvoiceGenerator() {
//   // Form state
//   const [billTo, setBillTo] = useState({
//     name: '',
//     email: '',
//     address: '',
//   });

//   const [payee, setPayee] = useState({
//     name: 'Your Company Name',
//     address: '123 Business St, City, Country',
//     email: 'accounting@yourcompany.com',
//     phone: '+1 (555) 123-4567',
//   });

//   const [invoiceDetails, setInvoiceDetails] = useState({
//     number: `INV-${Math.floor(Math.random() * 10000)}`,
//     date: new Date().toISOString().split('T')[0],
//     dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//   });

//   const [items, setItems] = useState([
//     { id: 1, accountCode: '', description: '', quantity: 1, amount: 0 },
//   ]);

//   const invoiceRef = useRef();

//   // Handlers
//   const handleBillToChange = (e) => {
//     const { name, value } = e.target;
//     setBillTo(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePayeeChange = (e) => {
//     const { name, value } = e.target;
//     setPayee(prev => ({ ...prev, [name]: value }));
//   };

//   const handleInvoiceDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setInvoiceDetails(prev => ({ ...prev, [name]: value }));
//   };

//   const handleItemChange = (id, e) => {
//     const { name, value } = e.target;
//     setItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, [name]: name === 'quantity' || name === 'amount' ? parseFloat(value) || 0 : value } : item
//       )
//     );
//   };

//   const addItem = () => {
//     setItems(prev => [
//       ...prev,
//       { id: Date.now(), accountCode: '', description: '', quantity: 1, amount: 0 },
//     ]);
//   };

//   const removeItem = (id) => {
//     if (items.length > 1) {
//       setItems(prev => prev.filter(item => item.id !== id));
//     }
//   };

//   const calculateTotal = () => {
//     return items.reduce((total, item) => total + (item.quantity * item.amount), 0);
//   };

//   const downloadInvoice = () => {
//     const input = invoiceRef.current;
//     // html2canvas(input, { scale: 2 }).then((canvas) => {
//     //   const imgData = canvas.toDataURL('image/png');
//     //   const pdf = new jsPDF('p', 'mm', 'a4');
//     //   const imgWidth = 210;
//     //   const pageHeight = 295;
//     //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
//     //   let heightLeft = imgHeight;
//     //   let position = 0;

//     //   pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     //   heightLeft -= pageHeight;

//     //   while (heightLeft >= 0) {
//     //     position = heightLeft - imgHeight;
//     //     pdf.addPage();
//     //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//     //     heightLeft -= pageHeight;
//     //   }

//     //   pdf.save(`invoice_${invoiceDetails.number}.pdf`);
//     // });
//   };

//   const printInvoice = () => {
//     const input = invoiceRef.current;
//     // html2canvas(input, { scale: 2 }).then((canvas) => {
//     //   const imgData = canvas.toDataURL('image/png');
//     //   const windowContent = '<!DOCTYPE html>';
//     //   const printWindow = window.open('', '', 'width=800,height=600');
//     //   printWindow.document.open();
//     //   printWindow.document.write(`
//     //     ${windowContent}
//     //     <html>
//     //       <head>
//     //         <title>Print Invoice</title>
//     //         <style>
//     //           body { margin: 0; padding: 0; }
//     //           img { width: 100%; height: auto; }
//     //         </style>
//     //       </head>
//     //       <body>
//     //         <img src="${imgData}" />
//     //       </body>
//     //     </html>
//     //   `);
//     //   printWindow.document.close();
//     //   printWindow.focus();
//     //   printWindow.print();
//     // });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Invoice Generator</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Form Section */}
//           <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Number</label>
//                 <input
//                   type="text"
//                   name="number"
//                   value={invoiceDetails.number}
//                   onChange={handleInvoiceDetailsChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   value={invoiceDetails.date}
//                   onChange={handleInvoiceDetailsChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
//                 <input
//                   type="date"
//                   name="dueDate"
//                   value={invoiceDetails.dueDate}
//                   onChange={handleInvoiceDetailsChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
            
//             <h2 className="text-xl font-semibold mt-6 mb-4">Bill To</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={billTo.name}
//                   onChange={handleBillToChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={billTo.email}
//                   onChange={handleBillToChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <textarea
//                   name="address"
//                   value={billTo.address}
//                   onChange={handleBillToChange}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
            
//             <h2 className="text-xl font-semibold mt-6 mb-4">Payee Details</h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={payee.name}
//                   onChange={handlePayeeChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <textarea
//                   name="address"
//                   value={payee.address}
//                   onChange={handlePayeeChange}
//                   rows="3"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={payee.email}
//                   onChange={handlePayeeChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={payee.phone}
//                   onChange={handlePayeeChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
            
//             <h2 className="text-xl font-semibold mt-6 mb-4">Invoice Items</h2>
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div key={item.id} className="border border-gray-200 p-3 rounded-md">
//                   <div className="grid grid-cols-2 gap-2 mb-2">
//                     <div>
//                       <label className="block text-xs font-medium text-gray-500 mb-1">Account Code</label>
//                       <input
//                         type="text"
//                         name="accountCode"
//                         value={item.accountCode}
//                         onChange={(e) => handleItemChange(item.id, e)}
//                         className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-medium text-gray-500 mb-1">Quantity</label>
//                       <input
//                         type="number"
//                         name="quantity"
//                         value={item.quantity}
//                         onChange={(e) => handleItemChange(item.id, e)}
//                         min="1"
//                         className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="mb-2">
//                     <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
//                     <input
//                       type="text"
//                       name="description"
//                       value={item.description}
//                       onChange={(e) => handleItemChange(item.id, e)}
//                       className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <div className="w-1/2">
//                       <label className="block text-xs font-medium text-gray-500 mb-1">Amount</label>
//                       <input
//                         type="number"
//                         name="amount"
//                         value={item.amount}
//                         onChange={(e) => handleItemChange(item.id, e)}
//                         min="0"
//                         step="0.01"
//                         className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                       />
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-red-500 hover:text-red-700 p-1"
//                       title="Remove item"
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))}
              
//               <button
//                 onClick={addItem}
//                 className="flex items-center justify-center w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
//               >
//                 <FiPlus className="mr-2" /> Add Item
//               </button>
//             </div>
//           </div>
          
//           {/* Invoice Preview Section */}
//           <div className="lg:col-span-2">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-semibold">Invoice Preview</h2>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={downloadInvoice}
//                     className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                   >
//                     <FiDownload className="mr-2" /> Download PDF
//                   </button>
//                   <button
//                     onClick={printInvoice}
//                     className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     <FiPrinter className="mr-2" /> Print
//                   </button>
//                 </div>
//               </div>
              
//               <div ref={invoiceRef} className="p-8 border border-gray-200">
//                 {/* Invoice Header */}
//                 <div className="flex justify-between items-start mb-8">
//                   <div>
//                     <h1 className="text-3xl font-bold text-gray-800">{payee.name}</h1>
//                     <p className="text-gray-600">{payee.address}</p>
//                     <p className="text-gray-600">{payee.email}</p>
//                     <p className="text-gray-600">{payee.phone}</p>
//                   </div>
                  
//                   <div className="text-right">
//                     <h2 className="text-2xl font-bold text-gray-800">INVOICE</h2>
//                     <p className="text-gray-600"># {invoiceDetails.number}</p>
//                     <div className="mt-4">
//                       <p className="text-gray-600">
//                         <span className="font-medium">Date:</span> {new Date(invoiceDetails.date).toLocaleDateString()}
//                       </p>
//                       <p className="text-gray-600">
//                         <span className="font-medium">Due Date:</span> {new Date(invoiceDetails.dueDate).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Bill To Section */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
//                   <p className="text-gray-800 font-medium">{billTo.name}</p>
//                   <p className="text-gray-600">{billTo.email}</p>
//                   <p className="text-gray-600 whitespace-pre-line">{billTo.address}</p>
//                 </div>
                
//                 {/* Invoice Items Table */}
//                 <div className="mb-8">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="py-2 px-4 text-left border-b border-gray-200">Account Code</th>
//                         <th className="py-2 px-4 text-left border-b border-gray-200">Description</th>
//                         <th className="py-2 px-4 text-right border-b border-gray-200">Qty</th>
//                         <th className="py-2 px-4 text-right border-b border-gray-200">Amount</th>
//                         <th className="py-2 px-4 text-right border-b border-gray-200">Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {items.map((item, index) => (
//                         <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                           <td className="py-3 px-4 border-b border-gray-200">{item.accountCode}</td>
//                           <td className="py-3 px-4 border-b border-gray-200">{item.description}</td>
//                           <td className="py-3 px-4 text-right border-b border-gray-200">{item.quantity}</td>
//                           <td className="py-3 px-4 text-right border-b border-gray-200">
//                             {item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
//                           </td>
//                           <td className="py-3 px-4 text-right border-b border-gray-200">
//                             {(item.quantity * item.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
                
//                 {/* Total Section */}
//                 <div className="flex justify-end">
//                   <div className="w-1/3">
//                     <div className="border-t border-gray-300 pt-4">
//                       <div className="flex justify-between mb-2">
//                         <span className="font-medium">Subtotal:</span>
//                         <span>
//                           {calculateTotal().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
//                         </span>
//                       </div>
//                       <div className="flex justify-between mb-2">
//                         <span className="font-medium">Tax (0%):</span>
//                         <span>$0.00</span>
//                       </div>
//                       <div className="flex justify-between text-lg font-bold">
//                         <span>Total:</span>
//                         <span>
//                           {calculateTotal().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Footer */}
//                 <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
//                   <p>Thank you for your business!</p>
//                   <p className="mt-1">Please make payment by the due date to avoid late fees.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
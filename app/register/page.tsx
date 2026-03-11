"use client"

import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormSection } from "@/components/ui/FormSection";
import { SignaturePad, SignaturePadHandle } from "@/components/ui/SignaturePad";

export default function RegisterPage() {
    const [activeTab, setActiveTab] = useState<'patient' | 'cards' | 'sign' | 'confirm'>('patient');

    // Signature state
    const [signView, setSignView] = useState<'list' | 'adopt'>('list');
    const [signatureMode, setSignatureMode] = useState<'type' | 'draw'>('type');
    const [signatureName, setSignatureName] = useState('');
    const [signatureInitials, setSignatureInitials] = useState('');
    const sigPadRef = useRef<SignaturePadHandle>(null);

    // Handle continuing to the next tab
    const handleContinue = (nextTab: 'patient' | 'cards' | 'sign' | 'confirm') => {
        setActiveTab(nextTab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-10 w-full">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="relative w-48 h-12">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <div className="text-right hidden sm:block">
                        <div className="text-primary font-bold text-lg flex items-center justify-end gap-2">
                            <span className="text-xl">🏥</span> AFAF Z SHAH MD PA
                        </div>
                        <div className="text-sm text-slate-500 font-medium">920 FROSTWOOD DRIVE, HOUSTON, TX 77024-2501</div>
                    </div>
                </div>

                {/* Progress Bar / Steps */}
                <div className="max-w-6xl mx-auto flex justify-between px-4 mt-2">
                    <div className="flex flex-1 justify-between text-sm font-semibold border-b-4 border-slate-200">
                        {/* <Link href="/" className="pb-3 px-2 sm:px-6 text-red-600 hover:text-red-700 cursor-pointer flex flex-col items-center gap-1">
                            <span className="text-lg">🏠</span> Restart
                        </Link> */}

                        {['patient', 'cards', 'sign', 'confirm'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`pb-3 px-2 sm:px-6 flex flex-col items-center gap-1 transition-all -mb-1 ${activeTab === tab ? 'text-primary border-b-4 border-primary' : 'text-slate-400 hover:text-slate-600 opacity-60'}`}
                            >
                                <span className="text-lg">
                                    {tab === 'patient' && '👤'}
                                    {tab === 'cards' && '💳'}
                                    {tab === 'sign' && '✍️'}
                                    {tab === 'confirm' && '✅'}
                                </span>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto mt-10 px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* PATIENT TAB */}
                    {activeTab === 'patient' && (
                        <div className="space-y-12">
                            {/* Demographics */}
                            <FormSection title="Patient Demographics">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                                        <Input id="firstName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                                        <Input id="lastName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dob">Date of Birth <span className="text-red-500">*</span></Label>
                                        <Input id="dob" type="date" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
                                        <Select id="gender">
                                            <option value="">Select...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="race">Race <span className="text-red-500">*</span></Label>
                                        <Select id="race">
                                            <option value="">Select...</option>
                                            <option value="asian">Asian</option>
                                            <option value="black">Black or African American</option>
                                            <option value="white">White</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ethnicity">Ethnicity <span className="text-red-500">*</span></Label>
                                        <Select id="ethnicity">
                                            <option value="">Select...</option>
                                            <option value="hispanic">Hispanic or Latino</option>
                                            <option value="not_hispanic">Not Hispanic or Latino</option>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="ssn">SSN (optional)</Label>
                                        <Input id="ssn" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="employer">Employer <span className="text-red-500">*</span></Label>
                                        <Input id="employer" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="occupation">Occupation <span className="text-red-500">*</span></Label>
                                        <Input id="occupation" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="maritalStatus">Marital Status <span className="text-red-500">*</span></Label>
                                        <Select id="maritalStatus">
                                            <option value="">Select...</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                        </Select>
                                    </div>
                                </div>
                            </FormSection>

                            {/* Patient Address */}
                            <FormSection title="Patient Address">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="address1">Address Line 1 <span className="text-red-500">*</span></Label>
                                        <Input id="address1" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address2">Address Line 2 (optional)</Label>
                                        <Input id="address2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                                        <Input id="city" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                                        <Select id="state">
                                            <option value="">Select...</option>
                                            <option value="tx">Texas</option>
                                            <option value="ca">California</option>
                                            <option value="ny">New York</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">Zip/Postal <span className="text-red-500">*</span></Label>
                                        <Input id="zip" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="county">County <span className="text-red-500">*</span></Label>
                                        <Input id="county" />
                                    </div>
                                </div>
                            </FormSection>

                            {/* Patient Contact */}
                            <FormSection title="Patient Contact">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
                                        <Input id="phone" type="tel" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email (optional)</Label>
                                        <Input id="email" type="email" />
                                    </div>
                                </div>
                            </FormSection>

                            {/* Emergency Contact */}
                            <FormSection title="Emergency Contact">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="emName">Emergency Contact Name <span className="text-red-500">*</span></Label>
                                        <Input id="emName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="emPhone">Phone <span className="text-red-500">*</span></Label>
                                        <Input id="emPhone" type="tel" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="emRelationship">Relationship <span className="text-red-500">*</span></Label>
                                        <Input id="emRelationship" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="emEmail">Email (optional)</Label>
                                        <Input id="emEmail" type="email" />
                                    </div>
                                </div>
                            </FormSection>

                            {/* How did you hear about us? */}
                            <FormSection title="How did you hear about us?">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                                    {['Magazine', 'Internet', 'Hospital', 'Doctor\'s Office', 'Billboard', 'Pharmacy', 'Mailer', 'Newspaper', 'Radio', 'Drive By', 'Been here before', 'TV', 'Other', 'Friend/Family Member'].map((source) => (
                                        <div key={source} className="space-y-2">
                                            <Label htmlFor={`hear_${source}`}>{source} (optional)</Label>
                                            <Select id={`hear_${source}`}>
                                                <option value="">Select...</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </Select>
                                        </div>
                                    ))}
                                </div>
                            </FormSection>

                            <hr className="my-12 border-slate-200" />

                            {/* Guarantor Sections */}
                            <FormSection title="Guarantor Demographics">
                                <div className="flex items-center space-x-2 mb-6 text-primary">
                                    <Checkbox id="sameAsPatientGuar" />
                                    <Label htmlFor="sameAsPatientGuar" className="text-[#000080] font-normal cursor-pointer">Same as Patient</Label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="gFirstName">First Name <span className="text-red-500">*</span></Label>
                                        <Input id="gFirstName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gLastName">Last Name <span className="text-red-500">*</span></Label>
                                        <Input id="gLastName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gDOB">Date of Birth <span className="text-red-500">*</span></Label>
                                        <Input id="gDOB" type="date" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gSSN">Guarantor Social Security Number (optional)</Label>
                                        <Input id="gSSN" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gGender">Gender <span className="text-red-500">*</span></Label>
                                        <Select id="gGender">
                                            <option value="">Select...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </div>
                                </div>
                            </FormSection>

                            <FormSection title="Guarantor Address">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="gAddress1">Address Line 1 <span className="text-red-500">*</span></Label>
                                        <Input id="gAddress1" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gAddress2">Address Line 2 (optional)</Label>
                                        <Input id="gAddress2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gCity">City <span className="text-red-500">*</span></Label>
                                        <Input id="gCity" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gState">State <span className="text-red-500">*</span></Label>
                                        <Select id="gState">
                                            <option value="">Select...</option>
                                            <option value="tx">Texas</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gZip">Zip/Postal <span className="text-red-500">*</span></Label>
                                        <Input id="gZip" />
                                    </div>
                                </div>
                            </FormSection>

                            <FormSection title="Guarantor Contact">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="gPhone">Phone <span className="text-red-500">*</span></Label>
                                        <Input id="gPhone" type="tel" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gEmail">Email (optional)</Label>
                                        <Input id="gEmail" type="email" />
                                    </div>
                                </div>
                            </FormSection>

                            <hr className="my-12 border-slate-200" />

                            <div className="flex items-center space-x-2 mb-10">
                                <Checkbox id="noInsurance" />
                                <Label htmlFor="noInsurance" className="text-[#000080] text-xl font-normal cursor-pointer">No Insurance / Selfpay</Label>
                            </div>

                            {/* Insurance Sections */}
                            <FormSection title="Primary Insurance">
                                <div className="flex gap-6 mb-6">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="sameAsPatientPri" />
                                        <Label htmlFor="sameAsPatientPri" className="text-[#000080] font-normal cursor-pointer">Same as Patient</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="sameAsGuarantorPri" />
                                        <Label htmlFor="sameAsGuarantorPri" className="text-[#000080] font-normal cursor-pointer">Same as Guarantor</Label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="pFirstName">Subscriber First Name <span className="text-red-500">*</span></Label>
                                        <Input id="pFirstName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pLastName">Subscriber Last Name <span className="text-red-500">*</span></Label>
                                        <Input id="pLastName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pCarrier">Primary Carrier <span className="text-red-500">*</span></Label>
                                        <Select id="pCarrier">
                                            <option value="">Select...</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pRelationship">Insured Relationship <span className="text-red-500">*</span></Label>
                                        <Select id="pRelationship" defaultValue="child">
                                            <option value="child">Child</option>
                                            <option value="self">Self</option>
                                            <option value="spouse">Spouse</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pMemberID">Insurance Member ID <span className="text-red-500">*</span></Label>
                                        <Input id="pMemberID" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pGroupID">Insurance Group ID <span className="text-red-500">*</span></Label>
                                        <Input id="pGroupID" />
                                    </div>
                                </div>
                            </FormSection>

                            <FormSection title="Secondary Insurance">
                                <div className="flex gap-6 mb-6">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="sameAsPatientSec" />
                                        <Label htmlFor="sameAsPatientSec" className="text-[#000080] font-normal cursor-pointer">Same as Patient</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="sameAsGuarantorSec" />
                                        <Label htmlFor="sameAsGuarantorSec" className="text-[#000080] font-normal cursor-pointer">Same as Guarantor</Label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="sFirstName">Subscriber First Name (optional)</Label>
                                        <Input id="sFirstName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sLastName">Subscriber Last Name (optional)</Label>
                                        <Input id="sLastName" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sCarrier">Primary Carrier (optional)</Label>
                                        <Select id="sCarrier">
                                            <option value="">Select...</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sRelationship">Insured Relationship (optional)</Label>
                                        <Select id="sRelationship" defaultValue="child">
                                            <option value="child">Child</option>
                                            <option value="self">Self</option>
                                            <option value="spouse">Spouse</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sMemberID">Insurance Member ID (optional)</Label>
                                        <Input id="sMemberID" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sGroupID">Insurance Group ID (optional)</Label>
                                        <Input id="sGroupID" />
                                    </div>
                                </div>
                            </FormSection>

                            {/* Patient Tab Continue */}
                            <div className="mt-12 flex justify-end">
                                <Button onClick={() => handleContinue('cards')} size="lg" className="w-40 h-12 text-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full transition-transform active:scale-95 shadow-md hover:shadow-lg">
                                    Continue <span className="ml-2">→</span>
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* CARDS TAB */}
                    {activeTab === 'cards' && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                            {/* Hidden Camera Inputs for Mobile HTML5 Capture */}
                            <input type="file" accept="image/*" capture="environment" id="camera-front" className="hidden" />
                            <input type="file" accept="image/*" capture="environment" id="camera-back" className="hidden" />

                            <div className="flex flex-col items-center mt-4 mb-2">
                                <h2 className="text-3xl font-light text-slate-800 mb-2">Identity Verification</h2>
                                <p className="text-slate-500 mb-12 text-center max-w-md">Please upload a clear, legible photo of the front and back of your driver's license or state ID.</p>

                                <div className="flex flex-col md:flex-row gap-8 sm:gap-16 mb-16">
                                    {/* Front Card Upload */}
                                    <div className="flex flex-col items-center gap-6 group hover:-translate-y-1 transition-transform">
                                        <div className="w-72 h-44 bg-slate-200 rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-xl transition-shadow border border-slate-300/60">
                                            <div className="absolute top-3 left-3 text-slate-500 font-bold text-sm flex items-center gap-1 opacity-70"><span className="text-xl">🪪</span> Driver's License</div>
                                            <div className="absolute top-12 left-5 w-14 h-20 bg-slate-300 rounded-lg"></div>
                                            <div className="absolute top-12 left-24 w-36 h-3 bg-blue-300/60 rounded-sm"></div>
                                            <div className="absolute top-20 left-24 w-28 h-2 bg-slate-300 rounded-sm"></div>
                                            <div className="absolute top-24 left-24 w-20 h-2 bg-slate-300 rounded-sm"></div>
                                            <div className="absolute bottom-5 left-5 w-48 h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#64748b_2px,#64748b_4px)] opacity-50"></div>
                                            <div className="absolute bottom-5 right-5 text-[9px] font-bold text-red-500 tracking-wider">DONOR ❤️</div>
                                        </div>

                                        <div className="w-72 h-36 border-2 border-dashed border-slate-300 hover:border-primary/50 group-hover:bg-blue-50/30 rounded-2xl flex flex-col items-center justify-center p-4 bg-slate-50 transition-colors">
                                            <span className="font-semibold text-slate-700 text-lg mb-5">Upload Front Image</span>
                                            <div className="flex gap-3 w-full justify-center">
                                                <Button variant="outline" className="bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-sm rounded-xl px-4 flex-1 max-w-[120px]">
                                                    <span className="mr-1">📁</span> Browse
                                                </Button>
                                                {/* HTML5 Camera Trigger */}
                                                <Button onClick={() => document.getElementById('camera-front')?.click()} className="bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-sm shadow-blue-500/20 rounded-xl px-4 flex-1 max-w-[120px]">
                                                    <span className="mr-1">📷</span> Camera
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Card Upload */}
                                    <div className="flex flex-col items-center gap-6 group hover:-translate-y-1 transition-transform">
                                        <div className="w-72 h-44 bg-slate-200 rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-xl transition-shadow border border-slate-300/60">
                                            <div className="absolute top-5 left-0 w-full h-10 bg-slate-800 opacity-90"></div>
                                            <div className="absolute top-20 left-5 text-xs font-mono font-bold text-slate-500 opacity-80 tracking-widest">ID0123456789{"<"}{"<"}{"<"}{"<"}{"<"}</div>
                                            <div className="absolute bottom-5 left-5 w-16 h-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#64748b_2px,#64748b_4px)] opacity-40"></div>
                                            <div className="absolute bottom-12 right-5 w-28 h-3 bg-blue-300/60 rounded-sm"></div>
                                            <div className="absolute bottom-5 right-5 w-36 h-3 bg-blue-300/60 rounded-sm"></div>
                                        </div>

                                        <div className="w-72 h-36 border-2 border-dashed border-slate-300 hover:border-primary/50 group-hover:bg-blue-50/30 rounded-2xl flex flex-col items-center justify-center p-4 bg-slate-50 transition-colors">
                                            <span className="font-semibold text-slate-700 text-lg mb-5">Upload Back Image</span>
                                            <div className="flex gap-3 w-full justify-center">
                                                <Button variant="outline" className="bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-sm rounded-xl px-4 flex-1 max-w-[120px]">
                                                    <span className="mr-1">📁</span> Browse
                                                </Button>
                                                {/* HTML5 Camera Trigger */}
                                                <Button onClick={() => document.getElementById('camera-back')?.click()} className="bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-sm shadow-blue-500/20 rounded-xl px-4 flex-1 max-w-[120px]">
                                                    <span className="mr-1">📷</span> Camera
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center mt-8 pt-8 border-t border-slate-100">
                                    <Button onClick={() => handleContinue('patient')} variant="ghost" size="lg" className="text-slate-500 hover:text-slate-800">
                                        <span className="mr-2">←</span> Back to Form
                                    </Button>
                                    <Button onClick={() => handleContinue('sign')} size="lg" className="w-40 h-12 text-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full transition-transform active:scale-95 shadow-md hover:shadow-lg">
                                        Continue <span className="ml-2">→</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SIGN TAB */}
                    {activeTab === 'sign' && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                            {/* Adopt Signature View (Shown First natively now) */}
                            <div className="mb-16">
                                <div className="flex items-center text-[#000080] mb-6">
                                    <span className="text-3xl mr-3 font-light">✍️</span>
                                    <h2 className="text-2xl font-normal">Adopt your signature</h2>
                                </div>

                                <div className="bg-[#eef5fa] rounded-md p-4 mb-8 text-slate-700 text-sm border border-[#d6e8f4]">
                                    Adopt your signature and initials. <strong>Type your name, or draw in the box below.</strong>
                                </div>

                                <div className="mb-6 flex gap-2 p-1 bg-slate-100 rounded-lg w-full max-w-xs shadow-inner">
                                    <button
                                        onClick={() => setSignatureMode('type')}
                                        className={`flex-1 py-1.5 text-sm font-semibold rounded-md transition-colors ${signatureMode === 'type' ? 'bg-white shadow text-primary' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Type
                                    </button>
                                    <button
                                        onClick={() => setSignatureMode('draw')}
                                        className={`flex-1 py-1.5 text-sm font-semibold rounded-md transition-colors ${signatureMode === 'draw' ? 'bg-white shadow text-primary' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        Draw
                                    </button>
                                </div>

                                <div className="space-y-8 max-w-lg">
                                    <div>
                                        <Label htmlFor="sigName" className="font-bold text-slate-800 text-xs mb-1 block">Patient/Guarantor Name <span className="text-red-500">*</span></Label>
                                        {signatureMode === 'type' ? (
                                            <div className="space-y-2 relative">
                                                <Input
                                                    id="sigName"
                                                    value={signatureName}
                                                    onChange={(e) => setSignatureName(e.target.value)}
                                                    className="font-sans"
                                                    placeholder="Type your full name"
                                                />
                                                {signatureName && (
                                                    <div className="absolute top-10 w-full h-16 border border-slate-300 rounded-md bg-white flex items-center px-4 overflow-hidden pointer-events-none">
                                                        {/* Cursive rendering of typed name */}
                                                        <span style={{ fontFamily: "'Cedarville Cursive', cursive", fontSize: '2rem' }} className="text-slate-800 leading-none mt-2 truncate">
                                                            {signatureName}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <SignaturePad ref={sigPadRef} />
                                        )}
                                    </div>

                                    <div className={signatureMode === 'type' && signatureName ? "mt-24" : "mt-8"}>
                                        <Label htmlFor="sigInitials" className="font-bold text-slate-800 text-xs mb-1 block">Patient/Guarantor Initials <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="sigInitials"
                                            value={signatureInitials}
                                            onChange={(e) => setSignatureInitials(e.target.value)}
                                            className="w-24 text-center text-lg uppercase tracking-wider h-12 border-slate-300 shadow-sm"
                                            maxLength={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="border-slate-200 mb-12" />

                            {/* Documents To Sign List (Shown Below) */}
                            <div>
                                <div className="flex items-center text-[#000080] mb-8 border-b pb-4">
                                    <span className="text-3xl mr-3 font-light">📄</span>
                                    <h2 className="text-2xl font-normal">Documents To Sign</h2>
                                </div>

                                <div className="overflow-x-auto border rounded-xl shadow-sm bg-white">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b bg-slate-50/50">
                                                <th className="p-4 font-bold text-slate-800 text-sm w-3/5">Document</th>
                                                <th className="p-4 font-bold text-slate-800 text-sm">Status</th>
                                                <th className="p-4 font-bold text-slate-800 text-sm text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b hover:bg-slate-50">
                                                <td className="p-4 text-slate-600 font-medium">My Emergency Room - Abilene Patient Registration Packet</td>
                                                <td className="p-4">
                                                    <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm tracking-wider">REQUIRED</span>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <span className="text-xs font-semibold text-slate-400">Pending Signature</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-12">
                                    <Button onClick={() => handleContinue('confirm')} className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-full px-8 py-6 h-auto text-base font-semibold shadow-md inline-block">
                                        Accept E-Signature
                                    </Button>
                                    <p className="text-[11px] text-slate-500 mt-4 leading-relaxed tracking-wide max-w-md">
                                        By clicking 'Accept,' you agree to sign this Agreement
                                        electronically. Your e-signature holds the same legal effect as a
                                        written signature. No third-party verification is required for its
                                        validity or enforceability.
                                    </p>
                                </div>

                                <div className="w-full flex justify-between items-center mt-12 pt-8 border-t border-slate-100">
                                    <Button onClick={() => handleContinue('cards')} variant="ghost" size="lg" className="text-slate-500 hover:text-slate-800">
                                        <span className="mr-2">←</span> Back to Cards
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CONFIRM TAB */}
                    {activeTab === 'confirm' && (
                        <div className="py-24 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-8 duration-300">
                            <div className="bg-green-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mb-6 border border-green-100 shadow-inner">
                                <span className="text-4xl">✅</span>
                            </div>
                            <h2 className="text-3xl font-light text-slate-800 mb-4 capitalize">Registration Complete</h2>
                            <p className="text-slate-500 max-w-md text-lg">Thank you! Your information and signatures have been successfully recorded.</p>
                            <div className="mt-10 flex gap-4">
                                <Button onClick={() => setSignView('list')} variant="outline" className="rounded-full shadow-sm" onClickCapture={() => handleContinue('sign')}>
                                    <span className="mr-2">←</span> Review Signatures
                                </Button>
                                <Link href="/">
                                    <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-full shadow-md">
                                        Return to Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}

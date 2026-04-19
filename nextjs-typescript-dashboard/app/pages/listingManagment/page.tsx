import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Import the Sidebar components to match your dashboard's structure
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"

export default function ListingManagementPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* 1. The Sidebar on the left */}
      <AppSidebar variant="inset" />
      
      <SidebarInset>
        {/* 2. The Header at the top */}
        <SiteHeader />

        {/* 3. Your Page Content */}
        <div className="flex flex-col gap-6 p-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Listing Management</h1>
            <p className="text-muted-foreground">
              Just created one page for now, use below components to create other pages.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Details Card */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Text Fields</CardTitle>                
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="make">Make</Label>
                    <Input id="make" placeholder="e.g. Toyota" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="e.g. Camry" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year of Manufacture</Label>
                  <Input id="year" type="number" placeholder="2024" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Listing Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the vehicle condition, features, and history..." 
                    className="min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pricing & Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Status</CardTitle>
                <CardDescription>Set your asking price and visibility.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Asking Price ($)</Label>
                  <Input id="price" type="number" placeholder="25000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="vin">VIN Number</Label>
                  <Input id="vin" placeholder="17-digit number" />
                </div>
                <Button className="w-full mt-4">Save Listing</Button>
                <Button variant="outline" className="w-full">Save as Draft</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
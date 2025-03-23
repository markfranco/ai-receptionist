"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { ArrowUp } from "lucide-react";

// Sample data for the dashboard
const statsData = [
  { label: "Total Calls", value: 124, change: "+12%", isPositive: true },
  { label: "New Leads", value: 38, change: "+5%", isPositive: true },
  { label: "Appointments Set", value: 17, change: "+8%", isPositive: true },
];

const recentCalls = [
  { 
    id: 1, 
    caller: "Sarah Johnson", 
    date: "Mar 23, 2:15 PM", 
    type: "BUYER",
    initial: "S" 
  },
  { 
    id: 2, 
    caller: "Michael Smith", 
    date: "Mar 23, 10:42 AM", 
    type: "SELLER",
    initial: "M" 
  },
  { 
    id: 3, 
    caller: "David Wilson", 
    date: "Mar 22, 3:51 PM", 
    type: "BUYER",
    initial: "D" 
  },
  { 
    id: 4, 
    caller: "Emily Brown", 
    date: "Mar 22, 11:23 AM", 
    type: "INQUIRY",
    initial: "E" 
  },
  { 
    id: 5, 
    caller: "James Taylor", 
    date: "Mar 21, 4:32 PM", 
    type: "BUYER",
    initial: "J" 
  },
];

const hotLeads = [
  {
    id: 1,
    name: "Sarah Johnson",
    details: "Looking for 3BR home",
    budget: "Budget: $450-500k",
    initial: "S",
  },
  {
    id: 2,
    name: "Michael Smith",
    details: "Selling 4BR property",
    budget: "Timeline: 1 month",
    initial: "M",
  },
  {
    id: 3,
    name: "David Wilson",
    details: "Interested in lakefront",
    budget: "Budget: $600k+",
    initial: "D",
  },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-1">
                <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
                    {stat.value}
                  </h3>
                  <div className={`flex items-center text-sm ${
                    stat.isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
                  }`}>
                    {stat.change}
                    {stat.isPositive ? <ArrowUp className="h-3 w-3 ml-1" /> : <span className="block h-3 w-3 ml-1">↓</span>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Calls Table */}
        <div className="md:col-span-2">
          <Card className="shadow-sm h-full">
            <CardContent className="p-0">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Recent Calls
                </h3>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">CALLER</TableHead>
                      <TableHead className="w-1/4">DATE/TIME</TableHead>
                      <TableHead className="w-1/4">TYPE</TableHead>
                      <TableHead className="w-1/4">ACTION</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentCalls.map((call) => (
                      <TableRow key={call.id}>
                        <TableCell className="font-medium">{call.caller}</TableCell>
                        <TableCell className="text-gray-500 dark:text-gray-400">{call.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={`${
                              call.type === "BUYER" 
                                ? "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                              : call.type === "SELLER"
                                ? "bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                                : "bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800"
                            }`}
                          >
                            {call.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hot Leads */}
        <div className="md:col-span-1">
          <Card className="shadow-sm h-full">
            <CardContent className="p-0">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  Hot Leads
                </h3>
              </div>
              <div className="p-4 space-y-4">
                {hotLeads.map((lead) => (
                  <div key={lead.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors">
                    <Avatar className="h-12 w-12 bg-red-100 dark:bg-red-900">
                      <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                        {lead.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{lead.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lead.details}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{lead.budget}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export function Dashboard() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Next.js Starter Dashboard
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Start building modern Next.js applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* プロジェクト概要セクション */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🚀 Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This Next.js Starter is a comprehensive template for modern
                  web application development. It includes TypeScript, Tailwind
                  CSS, Supabase authentication, and beautiful UI components.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">⚡ Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Next.js 14 App Router</li>
                  <li>• TypeScript Support</li>
                  <li>• Tailwind CSS Styling</li>
                  <li>• Supabase Authentication</li>
                  <li>• Responsive Design</li>
                  <li>• Modern UI Components</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* クイックアクション */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">🎯 Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/dashboard/profile" className="w-full">
                  <Button variant="outline" className="w-full h-12">
                    Profile Settings
                  </Button>
                </Link>
                <Link href="/dashboard/settings" className="w-full">
                  <Button variant="outline" className="w-full h-12">
                    App Settings
                  </Button>
                </Link>
                <Link href="/dashboard/docs" className="w-full">
                  <Button variant="outline" className="w-full h-12">
                    Documentation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 開発者向け情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                👨‍💻 Developer Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📁 Project Structure</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • <code className="bg-gray-100 px-1 rounded">app/</code> -
                      App Router pages
                    </li>
                    <li>
                      •{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        components/
                      </code>{" "}
                      - Reusable components
                    </li>
                    <li>
                      • <code className="bg-gray-100 px-1 rounded">lib/</code> -
                      Utility functions
                    </li>
                    <li>
                      • <code className="bg-gray-100 px-1 rounded">types/</code>{" "}
                      - TypeScript type definitions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🔧 Next Steps</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Configure environment variables</li>
                    <li>• Create Supabase project</li>
                    <li>• Design database schema</li>
                    <li>• Add custom features</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}

import React from 'react';
import { Download as DownloadIcon, Monitor, Github, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function Download() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Download Now</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get started with Schedule 1 Mod Creator. Free and open source.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Windows */}
          <div className="bg-bg-surface2 p-8 rounded-lg border border-border-default hover:border-primary-500 transition-all duration-300">
            <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Monitor className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">Windows</h3>
            <p className="text-sm text-text-secondary text-center mb-6">
              Windows 10/11 (64-bit)
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">v0.2.3 (Alpha)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">42 MB</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">MelonLoader Ready</span>
              </div>
            </div>
            {/* Download Link */}
            <a
              href="https://github.com/ESTONlA/ModcreatorSchedule1/releases" // Replace with your actual download link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download for Windows
              </Button>
            </a>
          </div>

          {/* Source Code */}
          <div className="bg-bg-surface2 p-8 rounded-lg border border-border-default hover:border-primary-500 transition-all duration-300">
            <div className="w-16 h-16 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Github className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">Source Code</h3>
            <p className="text-sm text-text-secondary text-center mb-6">
              Build from source
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">Open Source</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">GPL-3.0 license</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-500" />
                <span className="text-text-secondary">All platforms</span>
              </div>
            </div>
            <a
              href="https://github.com/ESTONlA/ModcreatorSchedule1" // Replace with your GitHub repo
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="w-full">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </a>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-16 max-w-3xl mx-auto bg-bg-surface1 p-8 rounded-lg border border-border-default">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-primary-100 mb-2">Minimum</h4>
              <ul className="space-y-1 text-text-secondary">
                <li>• OS: Windows 10/11 (64-bit)</li>
                <li>• RAM: 1 GB minimum</li>
                <li>• Storage: 200 MB available</li>
                <li>• MelonLoader installed</li>
                <li>• Schedule 1 game installed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary-100 mb-2">Recommended</h4>
              <ul className="space-y-1 text-text-secondary">
                <li>• OS: Windows 23 (64-bit)</li>
                <li>• RAM: 980 GB or more</li>
                <li>• Storage: 500 GB available</li>
                <li>• MelonLoader installed</li>
                <li>• Schedule 1 game installed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

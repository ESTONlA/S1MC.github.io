import React from 'react'
import { Plus, Folder, Zap } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'

export function Sidebar({ workspaces, activeWorkspace, onWorkspaceSelect, onCreateNew }) {
  return (
    <aside className="w-[280px] bg-bg-surface1 h-screen flex flex-col p-lg border-r border-border-default">
      {/* Header */}
      <div className="mb-xl">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-8 h-8 text-primary-500" />
          <h1 className="text-xl font-semibold">SCHEDULE 1</h1>
        </div>
        <p className="text-sm text-text-secondary">Mod Creator</p>
      </div>
      
      {/* Workspaces List */}
      <div className="flex-1 overflow-y-auto mb-lg">
        <h2 className="text-label text-text-secondary mb-sm">Workspaces</h2>
        <div className="space-y-1">
          {workspaces.map((workspace) => (
            <button
              key={workspace.id}
              onClick={() => onWorkspaceSelect(workspace.id)}
              className={cn(
                "w-full text-left py-sm px-md rounded-md transition-all duration-150 ease-out group",
                activeWorkspace === workspace.id
                  ? "bg-primary-500/10 text-primary-100 border-l-2 border-primary-500"
                  : "text-text-secondary hover:bg-bg-surface2 hover:text-text-primary"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <Folder className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium text-sm truncate">{workspace.name}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-text-secondary">{workspace.version}</span>
                <span className="text-text-secondary/50">•</span>
                <span className="text-text-secondary/70 font-mono text-[10px] truncate">
                  {workspace.path}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Create New Button */}
      <Button onClick={onCreateNew} className="w-full">
        <Plus className="w-5 h-5 mr-2" />
        Create New Mod
      </Button>
      
      {/* News Footer */}
      <div className="mt-lg pt-lg border-t border-border-default">
        <div className="bg-primary-500/10 p-sm rounded-md border border-primary-500/20">
          <p className="text-xs text-text-secondary mb-1">Latest Update</p>
          <p className="text-xs text-primary-100 font-medium">
            Schedule 1 API v2.0 Released
          </p>
        </div>
      </div>
    </aside>
  )
}

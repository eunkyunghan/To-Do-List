import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  PauseCircle, 
  XCircle, 
  Users, 
  Clock, 
  Package, 
  ChevronRight,
  Calendar as CalendarIcon,
  LayoutDashboard
} from 'lucide-react';
import { TODAY_AGENDA, UPCOMING_DAYS } from './constants';
import { AgendaItem, AgendaStatus } from './types';

export default function App() {
  const [agendas, setAgendas] = useState<AgendaItem[]>(TODAY_AGENDA);

  const handleStatusChange = (id: string, newStatus: AgendaStatus) => {
    setAgendas(prev => prev.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    ));
  };

  const getStatusColor = (status: AgendaStatus) => {
    switch (status) {
      case 'ready': return 'text-emerald-500 bg-emerald-50 border-emerald-200';
      case 'hold': return 'text-amber-500 bg-amber-50 border-amber-200';
      case 'cancel': return 'text-rose-500 bg-rose-50 border-rose-200';
      default: return 'text-slate-400 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex justify-between items-center sticky top-0 bg-[#F8FAFC]/80 backdrop-blur-md z-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Today's Agenda</h1>
          <p className="text-slate-500 text-sm font-medium">Thursday, March 26</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
          <LayoutDashboard size={20} className="text-slate-600" />
        </div>
      </header>

      {/* Top Hero Section: Today's Agendas */}
      <section className="px-6 space-y-4 mb-12">
        {agendas.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-5 rounded-3xl border shadow-sm transition-all duration-300 ${
              item.isCurrent 
                ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 border-transparent text-white shadow-indigo-200 shadow-xl scale-[1.02]' 
                : 'bg-white border-slate-100 text-slate-900'
            } ${
              item.status !== 'pending' && !item.isCurrent ? 'opacity-75 grayscale-[0.5]' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  item.isCurrent ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.isCurrent ? 'Now • ' : ''}{item.time}
                </span>
                <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
              </div>
              
              {/* Status Radio Buttons */}
              <div className="flex flex-wrap gap-2 mt-1">
                {(['ready', 'hold', 'cancel'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(item.id, status)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-tight transition-all ${
                      item.status === status 
                        ? status === 'ready' ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm' :
                          status === 'hold' ? 'bg-amber-500 border-amber-500 text-white shadow-sm' :
                          'bg-rose-500 border-rose-500 text-white shadow-sm'
                        : item.isCurrent 
                          ? 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20' 
                          : 'bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                      item.status === status 
                        ? 'bg-white border-white' 
                        : item.isCurrent ? 'border-white/40' : 'border-slate-300'
                    }`}>
                      {item.status === status && (
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          status === 'ready' ? 'bg-emerald-500' :
                          status === 'hold' ? 'bg-amber-500' :
                          'bg-rose-500'
                        }`} />
                      )}
                    </div>
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Agenda Details Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`flex items-start gap-2 p-2 rounded-xl ${
                item.isCurrent ? 'bg-white/10' : 'bg-slate-50/50'
              }`}>
                <Users size={14} className={`${item.isCurrent ? 'text-white/60' : 'text-slate-400'} mt-0.5 shrink-0`} />
                <div>
                  <p className={`text-[10px] uppercase font-bold tracking-tighter ${item.isCurrent ? 'text-white/50' : 'text-slate-400'}`}>Stakeholders</p>
                  <p className={`text-xs font-medium line-clamp-1 ${item.isCurrent ? 'text-white' : 'text-slate-700'}`}>{item.stakeholders.join(', ')}</p>
                </div>
              </div>
              <div className={`flex items-start gap-2 p-2 rounded-xl ${
                item.isCurrent ? 'bg-white/10' : 'bg-slate-50/50'
              }`}>
                <Clock size={14} className={`${item.isCurrent ? 'text-white/60' : 'text-slate-400'} mt-0.5 shrink-0`} />
                <div>
                  <p className={`text-[10px] uppercase font-bold tracking-tighter ${item.isCurrent ? 'text-white/50' : 'text-slate-400'}`}>Duration</p>
                  <p className={`text-xs font-medium ${item.isCurrent ? 'text-white' : 'text-slate-700'}`}>{item.duration}</p>
                </div>
              </div>
              <div className={`flex items-start gap-2 p-2 rounded-xl col-span-2 ${
                item.isCurrent ? 'bg-white/10' : 'bg-slate-50/50'
              }`}>
                <Package size={14} className={`${item.isCurrent ? 'text-white/60' : 'text-slate-400'} mt-0.5 shrink-0`} />
                <div>
                  <p className={`text-[10px] uppercase font-bold tracking-tighter ${item.isCurrent ? 'text-white/50' : 'text-slate-400'}`}>Required Materials</p>
                  <p className={`text-xs font-medium ${item.isCurrent ? 'text-white' : 'text-slate-700'}`}>{item.materials.join(' • ')}</p>
                </div>
              </div>
            </div>

            {/* Memo Section */}
            {item.memo && (
              <div className={`mt-4 p-3 rounded-2xl border ${
                item.isCurrent 
                  ? 'bg-white/10 border-white/20 text-white/90' 
                  : 'bg-slate-50 border-slate-100 text-slate-600'
              }`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className={`w-1 h-3 rounded-full ${item.isCurrent ? 'bg-white/40' : 'bg-indigo-400'}`} />
                  <p className={`text-[10px] uppercase font-bold tracking-wider ${item.isCurrent ? 'text-white/50' : 'text-slate-400'}`}>Memo</p>
                </div>
                <p className="text-xs leading-relaxed italic">"{item.memo}"</p>
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Bottom Section: Upcoming Days Carousel */}
      <section className="mt-auto">
        <div className="px-6 mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight">Upcoming Days</h2>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="overflow-x-auto pb-8 no-scrollbar touch-pan-x">
          <div className="flex gap-4 px-6 min-w-max">
            {UPCOMING_DAYS.map((day, index) => (
              <motion.div
                key={day.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-64 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group"
              >
                {/* Decorative Background Element */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-indigo-50 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <CalendarIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-indigo-600/60 uppercase tracking-widest">{day.dayName}</p>
                      <p className="text-lg font-bold leading-none">{day.date}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Priority Task</p>
                      <p className="text-sm font-semibold text-slate-800">{day.topTask}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-400">{day.taskCount} Tasks</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation (Visual Only) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-full flex items-center gap-12 shadow-2xl z-20">
        <button className="text-white"><LayoutDashboard size={20} /></button>
        <button className="text-slate-500 hover:text-white transition-colors"><CalendarIcon size={20} /></button>
        <button className="text-slate-500 hover:text-white transition-colors"><Users size={20} /></button>
      </nav>
    </div>
  );
}

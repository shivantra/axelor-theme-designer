import { Link } from 'react-router-dom';
import { Button } from '@axelor/ui/core';
import { MaterialIcon, MaterialIconProps } from '@axelor/ui/icons/material-icon';

import { Footer } from '@/components/footer';
import PreviewImage from '../../images/theme-designer-preview.png';
import CompanyImage from '../../images/company.svg';
import { COMPANY_FEATURES, COMPANY_SERVICES, FEATURES, STEPS } from '@/constants';
import { i18n } from '@/services/i18n';
import SeoTags from '@/components/SeoTags';

export function HomePage() {
  return (
    <>
      <SeoTags />
      <main>
        <section className="relative overflow-hidden pt-30! pb-14 md:pt-40! md:pb-28 bg-[#f6f7fb] -mt-16!">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Gradient mesh */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-300/40 rounded-full blur-3xl" />
          <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-pink-300/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl" />

          <div className="relative w-[90%] max-w-[1200px] mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-10! lg:mb-20!">
              <h1 className="text-center font-bold! tracking-tight text-slate-900">
                <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-900 max-w-4xl mx-auto">
                  {i18n.get('Create, preview, and deliver customized')}
                </span>

                <span
                  className="block mt-3 lg:mt-4 text-3xl md:text-4xl lg:text-5xl
                   bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                   bg-clip-text text-transparent"
                >
                  {i18n.get('Axelor ERP themes instantly.')}
                </span>
              </h1>

              <p className="mt-6! mb-0! max-w-3xl mx-auto text-lg text-slate-700">
                {i18n.get(
                  'A free visual Theme Designer built to help partners and teams quickly design professional, client-ready ERP interfaces. Perfect for demos, proofs of concept, and real-world implementations.'
                )}
              </p>

              <div className="mt-10 flex justify-center gap-4">
                <Button size="lg" className="btn p-0!">
                  <Link
                    to="/designer"
                    state={{ fromApp: true }}
                    className="group relative inline-flex items-center justify-center overflow-hidden px-7 py-4 rounded-full bg-slate-900 text-white! text-sm font-medium transition-all duration-300"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <MaterialIcon
                        icon="open_in_new"
                        className="text-[18px] leading-none transition-transform duration-300"
                      />
                      {i18n.get('Theme Designer')}
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Builder preview */}
            <div className="relative mx-auto">
              {/* Ambient glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 rounded-[40px] blur-3xl" />

              {/* Floating panels */}
              <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="col-span-1 lg:col-span-3">
                  {/* Main preview */}
                  <div className="flex-1 h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-2xl p-4">
                    <img
                      src={PreviewImage}
                      alt="Theme Builder UI"
                      className="rounded-2xl w-full h-full"
                    />
                  </div>
                </div>
                <div className="hidden col-span-1 lg:flex flex-col gap-6">
                  {/* tokens panel */}
                  <div className="hidden lg:block w-full h-full rounded-2xl bg-white/80 backdrop-blur border border-black/10 shadow-xl p-4">
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {i18n.get('COLOR TOKENS')}
                    </p>
                    <div className="space-y-2">
                      {['Primary', 'Secondary', 'Success', 'Warning'].map((t, index) => {
                        const colorMap: Record<string, string> = {
                          Primary: '#1976d2',
                          Secondary: '#9c27b0',
                          Success: '#4caf50',
                          Warning: '#ff9800',
                        };
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 text-sm"
                          >
                            <span>{i18n.get(t)}</span>
                            <span
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: colorMap[t] }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* modes panel */}
                  <div className="hidden lg:block w-full h-full rounded-2xl bg-white/80 backdrop-blur border border-black/10 shadow-xl p-4">
                    <p className="text-xs font-semibold text-slate-500 mb-3">{i18n.get('MODES')}</p>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">
                        {i18n.get('Light')}
                      </div>
                      <div className="rounded-lg bg-slate-200 px-4 py-2 text-sm">
                        {i18n.get('Dark')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="relative overflow-hidden py-14 md:py-20">
          {/* Soft blob */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-indigo-200/30 blur-3xl" />
          </div>

          {/* Grid */}
          <div
            className="absolute inset-0 -z-1"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
      `,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="row w-[90%] max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="text-center space-y-4! mb-10! lg:mg-16!">
              <h2 className="text-3xl! md:text-4xl! font-bold! tracking-tight text-slate-900">
                {i18n.get('Powerful Features')}
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                {i18n.get('Everything you need to design, preview, and ship Axelor ERP themes')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature, index) => {
                const icon = feature.icon;

                return (
                  <div key={index} className="group relative rounded-3xl">
                    {/* Card glow */}
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-400/40 via-purple-400/40 to-pink-400/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />

                    {/* Card */}
                    <div className="relative h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-black/10 p-7 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                      <div className="flex flex-col gap-5">
                        {/* Icon */}
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <MaterialIcon
                            icon={icon as MaterialIconProps['icon']}
                            className="h-6 w-6 text-white"
                          />

                          {/* Glow */}
                          <div className="absolute inset-0 -z-10 rounded-xl bg-purple-400/40 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="!text-lg !font-semibold text-gray-900">
                            {i18n.get(feature.title)}
                          </h3>

                          {/* Divider */}
                          <div className="my-3 h-[2px] w-8 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 group-hover:w-14" />

                          <p className="text-sm font-medium text-gray-500">
                            {i18n.get(feature.description)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-14 md:py-20 bg-[#f6f7fb]">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
      `,
              backgroundSize: '56px 56px',
            }}
          />

          {/* Radial focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.10),transparent_60%)]" />

          {/* Gradient mesh */}
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-300/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-purple-300/40 rounded-full blur-3xl" />

          <div className="relative row w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="space-y-6!">
              <h2 className="text-3xl! md:text-4xl! font-bold! tracking-tight text-slate-900">
                {i18n.get('Design Your Perfect')}{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {i18n.get('Axelor Theme')}{' '}
                </span>
                {i18n.get('In Second')}
              </h2>

              <p className="text-lg text-slate-700 max-w-xl">
                {i18n.get(
                  'Open the theme builder, fine-tune colors and components, preview changes instantly, and export production-ready themes for Axelor ERP.'
                )}
              </p>

              <div className="pt-4">
                <Button size="lg" className="btn p-0!">
                  <Link
                    to="/designer"
                    state={{ fromApp: true }}
                    className="group relative inline-flex items-left justify-center overflow-hidden px-7 py-4 rounded-full bg-slate-900 text-white! text-sm font-medium transition-all duration-300"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <MaterialIcon
                        icon="open_in_new"
                        className="text-[18px] leading-none transition-transform duration-300"
                      />
                      {i18n.get('Theme Designer')}
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              {/* Image glow */}
              <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-2xl" />

              {/* Image card */}
              <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0_20px_80px_rgba(99,102,241,0.25)] p-4">
                <img
                  src={PreviewImage}
                  alt="Theme Builder UI preview"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORLS? */}
        <section className="relative overflow-hidden py-14 md:py-20">
          {/* Left Bottom Glow */}
          <div className="pointer-events-none absolute -left-32 bottom-24">
            <div className="h-[420px] w-[420px] rounded-[40%] bg-purple-300/30 blur-3xl" />
          </div>

          {/* Right Bottom Glow */}
          <div className="pointer-events-none absolute -right-32 bottom-16">
            <div className="h-[400px] w-[400px] rounded-[50%] bg-pink-300/25 blur-3xl" />
          </div>

          {/* Left Top Glow */}
          <div className="pointer-events-none absolute -left-32 top-16">
            <div className="h-[360px] w-[360px] rounded-[35%] bg-indigo-300/25 blur-3xl" />
          </div>

          {/* Right Top Glow */}
          <div className="pointer-events-none absolute -right-32 top-24">
            <div className="h-[380px] w-[380px] rounded-[45%] bg-purple-200/20 blur-3xl" />
          </div>

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 -z-1"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
      `,
              backgroundSize: '48px 48px',
            }}
          />
          <div className="row w-[90%] max-w-[1200px] mx-auto">
            <div className="text-center space-y-4! mb-10! lg:mg-16!">
              <h2 className="text-3xl! md:text-4xl! font-bold! tracking-tight text-slate-900">
                {i18n.get('How It Works')}
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                {i18n.get('Get started in four simple steps')}
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-purple-200" />

              <div className="relative w-full">
                {/* Timeline Spine */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 opacity-50" />

                <div className="space-y-10">
                  {STEPS.map((step, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                      >
                        {/* Step Dot */}
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center animate-pulse">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>

                        {/* Card */}
                        <div
                          className={`w-full md:w-[45%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                        >
                          <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
                            {/* Glowing gradient background */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />

                            {/* Glass Card */}
                            <div className="relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                              <div className="flex items-center gap-4">
                                {/* Step Number */}
                                <div className="flex items-center justify-center h-12! w-12! text-white font-bold text-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md">
                                  {step.number}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-1 flex-1">
                                  <h3 className="text-lg! font-bold! text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                                    {i18n.get(step.title)}
                                  </h3>
                                  <p className="text-sm text-slate-600 mb-0!">
                                    {i18n.get(step.description)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY INFORMATION */}
        <section id="shivantra" className="relative overflow-hidden pt-12 pb-24">
          {/* Radial focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.10),transparent_60%)]" />

          {/* Gradient mesh */}
          <div className="absolute -top-0 -left-40 w-[520px] h-[520px] bg-indigo-300/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-purple-300/40 rounded-full blur-3xl" />

          <div className="relative row w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"></div>
          {/* Soft blob */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[700px] w-[700px] rounded-full bg-indigo-200/30 blur-3xl" />
          </div>

          <div className="relative w-[90%] max-w-[1200px] mx-auto">
            {/* Title */}
            <div className=" mb-5 md:mb-13">
              <h2 className="text-3xl! text-center md:text-4xl! font-bold! tracking-tight text-slate-900">
                {i18n.get('Built by in')}{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {i18n.get('Experts')}{' '}
                </span>
                {i18n.get('Axelor ERP')}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT – Hero Image */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -z-1 -top-10 -left-10 h-full w-full rounded-[40px] bg-indigo-600/10 blur-2xl" />

                <Link
                  to="https://shivantra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden shadow-[0_40px_120px_-40px_rgba(79,70,229,0.6)]"
                >
                  <img
                    src={CompanyImage}
                    alt="Company"
                    className="w-full object-cover relative rounded-3xl bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0_20px_80px_rgba(99,102,241,0.25)] p-4"
                  />
                </Link>

                <p className="text-lg mt-8! text-slate-800 leading-relaxed max-w-2xl">
                  {i18n.get('This Theme Designer is developed by')}{' '}
                  <Link
                    to="https://shivantra.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold transition-colors menu-item"
                  >
                    Shivantra
                  </Link>{' '}
                  {i18n.get(
                    ', a team that has been building, customizing, and delivering ERP solutions for over a decade.'
                  )}
                </p>
              </div>

              {/* RIGHT – Story + Features */}
              <div className="lg:col-span-7 space-y-10">
                <h3 className="text-xl! md:text-3xl! font-bold! mb-3! tracking-tight text-slate-900 leading-tight">
                  {i18n.get('Why we built this')}
                </h3>
                <p className="text-l! text-slate-800 leading-relaxed mb-10!">
                  {i18n.get(
                    'We work hands-on with Axelor ERP in real client environments, from presales demos to large-scale production implementations. This tool is a direct result of that experience'
                  )}
                </p>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                  {COMPANY_FEATURES.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 p-6 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition -z-1">
                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
                      </div>

                      {/* Icon */}
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10">
                        <MaterialIcon
                          icon={feature.icon as MaterialIconProps['icon']}
                          className="h-7 w-7 text-indigo-600 flex items-center justify-center"
                        />
                      </div>

                      {/* Text */}
                      <h4 className="!text-lg !font-semibold text-gray-900 mb-0!">
                        {i18n.get(feature.title)}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Trust badge */}
                <Link
                  to="https://shivantra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-12 w-full"
                >
                  {/* Gradient Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl z-0 h-full" />

                  {/* Content Layer */}
                  <div className="relative z-10 flex items-start gap-3 px-7 py-6 rounded-3xl text-white">
                    <MaterialIcon icon="verified" className="h-7 w-7 text-white flex-shrink-0" />

                    <p className="text-lg flex-1 mb-0!">
                      <strong>{i18n.get('Shivantra')}</strong>{' '}
                      {i18n.get('is an official partner of')} <strong>{i18n.get('Axelor')}</strong>
                      {i18n.get(', delivering production-grade ERP systems at scale.')}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY SERVICES */}
        <section className="relative overflow-hidden">
          {/* Grid bg */}
          <div
            className="absolute inset-0 -z-1"
            style={{
              backgroundImage: `
        linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
      `,
              backgroundSize: '48px 48px',
            }}
          />
          {/* Background glows */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative mx-auto w-[90%] max-w-[1200px] py-14 lg:py-20">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl! md:text-4xl! font-bold! tracking-tight text-slate-900 mb-0!">
                {i18n.get('Axelor Services by')}{' '}
                <Link
                  to="https://shivantra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r! from-indigo-500! via-purple-500! to-pink-500! bg-clip-text! text-transparent!"
                >
                  {i18n.get('Shivantra')}
                </Link>
              </h1>

              <p className="mt-6! mb-10! text-lg text-slate-600">
                {i18n.get(
                  'Beyond building tools, we help organizations design, implement, and extend Axelor ERP with confidence; while supporting teams at any stage of their ERP journey.'
                )}
              </p>
            </div>
            {/* Right feature cards */}
            <div className="grid text-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {COMPANY_SERVICES.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-400/0 via-purple-400/0 to-pink-400/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100 -z-1" />

                  <h3 className="!text-lg !font-semibold text-gray-900">{i18n.get(item.title)}</h3>
                  <p className="mt-2 text-sm text-slate-600 mb-0!">{i18n.get(item.description)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" className="btn p-0!">
                <Link
                  to="https://shivantra.com/#contact"
                  target="_blank"
                  state={{ fromApp: true }}
                  className="group relative inline-flex items-center justify-center overflow-hidden px-7 py-4 rounded-full bg-slate-900 text-white! text-sm font-medium transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <MaterialIcon
                      icon="open_in_new"
                      className="text-[18px] leading-none transition-transform duration-300"
                    />
                    {i18n.get('Contact Now')}
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900">
          {/* Floating Shapes */}
          <div className="pointer-events-none absolute -top-20 -left-20">
            <div className="h-[400px] w-[400px] rounded-full bg-indigo-500/30 blur-3xl animate-blob" />
          </div>
          <div className="pointer-events-none absolute -bottom-32 right-10">
            <div className="h-[360px] w-[360px] rounded-full bg-pink-500/25 blur-3xl animate-blob animation-delay-2000" />
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto text-center space-y-6">
            <h2 className="text-3xl! md:text-5xl! font-extrabold text-white! mb-7!">
              {i18n.get('Build better')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {i18n.get('Axelor ERP')}
              </span>{' '}
              {i18n.get('experiences')}
            </h2>

            <p className="text-lg! text-white/90! max-w-2xl mx-auto">
              {i18n.get(
                'A free visual theme designer built for the Axelor ecosystem. No setup. No code. Just results.'
              )}
            </p>

            <div className="pt-4">
              <Button size="lg" className="btn p-0!">
                <Link
                  to="/designer"
                  state={{ fromApp: true }}
                  className="group relative inline-flex items-center justify-center overflow-hidden px-7 py-4 rounded-full bg-white text-slate-950! text-sm font-medium transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <MaterialIcon
                      icon="open_in_new"
                      className="text-[18px] leading-none transition-transform duration-300"
                    />
                    {i18n.get('Theme Designer')}
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;

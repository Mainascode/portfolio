export const Icon = ({ children, large = false }) => <svg className={large ? 'ic ic-lg' : 'ic'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
export const Mail = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>
export const Pin = () => <Icon><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>
export const Check = () => <Icon><path d="m5 12 5 5L20 7"/></Icon>
export const Arrow = () => <Icon><path d="M7 17 17 7M8 7h9v9"/></Icon>
export const Github = () => <Icon><path d="M9 19c-4 1-4-2-6-3m12 5v-4c0-1 .1-1.5-.5-2 3-.3 5.5-1.5 5.5-6a5 5 0 0 0-1.3-3.2 4 4 0 0 0-.1-3.2s-1.2-.4-3.5 1.3a12 12 0 0 0-6.2 0C5.5 2.5 4.4 2.8 4.4 2.8a4 4 0 0 0-.1 3.2A5 5 0 0 0 3 9.2c0 4.6 2.5 5.8 5.5 6-.6.6-.5 1.3-.5 2V21"/></Icon>
export const Heading = ({ title, kicker }) => <div className="sec-head"><h2>{title}</h2><span className="kicker">{kicker}</span></div>
export const PageHeading = ({ title, kicker }) => <div className="page-heading"><Heading title={title} kicker={kicker}/></div>

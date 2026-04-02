"use client";

export function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 5% 80px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-10%",left:"50%",transform:"translateX(-50%)",width:800,height:500,background:"radial-gradient(ellipse,rgba(34,197,94,0.07) 0%,rgba(56,189,248,0.04) 40%,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",maxWidth:1200,margin:"0 auto",width:"100%"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--surface)",border:"1px solid var(--border2)",borderRadius:50,padding:"6px 14px",fontSize:12,color:"var(--green)",fontWeight:500,marginBottom:24}}>
            <div style={{width:6,height:6,background:"var(--green)",borderRadius:"50%"}}/>
            AI-Powered Finance
          </div>
          <h1 style={{fontSize:"clamp(36px,4vw,58px)",fontWeight:600,lineHeight:1.12,letterSpacing:"-1.5px",color:"var(--text)",marginBottom:20}}>
            Take control of your money{" "}
            <span style={{background:"linear-gradient(90deg,#22c55e,#38bdf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              without thinking about it
            </span>
          </h1>
          <p style={{fontSize:17,color:"var(--text2)",lineHeight:1.65,maxWidth:440,marginBottom:40,fontWeight:300}}>
            Arkonomy tracks your spending, analyzes patterns, and delivers real AI insights — not generic tips.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href="https://app.arkonomy.com" style={{background:"var(--green)",color:"#080c10",padding:"13px 28px",borderRadius:50,fontSize:15,fontWeight:600,textDecoration:"none",display:"inline-block"}}>Get Started →</a>
            <a href="#preview" style={{background:"transparent",color:"var(--text)",border:"1px solid var(--border2)",padding:"13px 28px",borderRadius:50,fontSize:15,fontWeight:500,textDecoration:"none",display:"inline-block"}}>View Demo</a>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
          <div style={{width:260,background:"var(--bg3)",border:"1px solid var(--border2)",borderRadius:38,padding:16,boxShadow:"0 0 80px rgba(34,197,94,0.08),0 40px 80px rgba(0,0,0,.5)"}}>
            <div style={{width:80,height:6,background:"var(--border2)",borderRadius:3,margin:"0 auto 20px"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
              <div>
                <div style={{fontSize:11,color:"var(--text3)"}}>TOTAL BALANCE</div>
                <div style={{fontSize:28,fontWeight:600,color:"var(--text)",letterSpacing:-1,marginTop:2}}>$4,820</div>
                <div style={{fontSize:11,color:"var(--text3)",marginTop:2}}>March 2026</div>
              </div>
              <div style={{width:32,height:32,background:"linear-gradient(135deg,#16a34a,#0ea5e9)",borderRadius:"50%"}}/>
            </div>
            <div style={{height:50,marginBottom:16,display:"flex",alignItems:"flex-end",gap:3}}>
              {[40,55,35,70,60,80,90,75].map((h,i)=>(
                <div key={i} style={{flex:1,borderRadius:3,height:`${h}%`,background:i>=5?"var(--green)":i>=3?"rgba(34,197,94,.3)":"var(--surface2)"}}/>
              ))}
            </div>
            <div style={{background:"linear-gradient(135deg,rgba(34,197,94,0.12),rgba(56,189,248,0.08))",border:"1px solid rgba(34,197,94,0.25)",borderRadius:10,padding:12,marginBottom:12}}>
              <div style={{fontSize:10,color:"var(--green)",fontWeight:600,marginBottom:6}}>✦ AI INSIGHT</div>
              <p style={{fontSize:11,color:"var(--text2)",lineHeight:1.5}}>Transport hit $590 this month — $180 above average.</p>
              <div style={{fontSize:10,color:"var(--green)",fontWeight:600,marginTop:6}}>→ Reduce by $120 next month</div>
            </div>
            {[{icon:"🛒",name:"Whole Foods",date:"Today",amount:"-$67.40",neg:true},{icon:"💼",name:"Payroll",date:"Yesterday",amount:"+$3,200",neg:false},{icon:"🚕",name:"Uber",date:"Mar 29",amount:"-$24.80",neg:true}].map((tx)=>(
              <div key={tx.name} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                <div style={{width:28,height:28,background:"var(--surface2)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>{tx.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,color:"var(--text)",fontWeight:500}}>{tx.name}</div>
                  <div style={{fontSize:9,color:"var(--text3)"}}>{tx.date}</div>
                </div>
                <div style={{fontSize:11,fontWeight:600,color:tx.neg?"var(--red)":"var(--green)"}}>{tx.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

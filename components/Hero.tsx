"use client";

export function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 5% 80px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-10%",left:"50%",transform:"translateX(-50%)",width:900,height:600,background:"radial-gradient(ellipse,rgba(0,229,160,0.06) 0%,rgba(56,182,255,0.04) 40%,transparent 70%)",pointerEvents:"none"}}/>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",maxWidth:1200,margin:"0 auto",width:"100%"}}>
        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"var(--surface)",border:"1px solid var(--border2)",borderRadius:50,padding:"6px 14px",fontSize:12,color:"var(--green)",fontWeight:500,marginBottom:24}}>
            <div style={{width:6,height:6,background:"var(--green)",borderRadius:"50%"}}/>
            AI Financial Autopilot
          </div>

          <h1 style={{fontSize:"clamp(36px,4vw,56px)",fontWeight:700,lineHeight:1.1,letterSpacing:"-1.5px",color:"var(--text)",marginBottom:20}}>
            Take control of your money{" "}
            <span style={{background:"linear-gradient(90deg,#00e5a0,#38b6ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
              without thinking about it
            </span>
          </h1>

          <p style={{fontSize:17,color:"var(--text2)",lineHeight:1.65,maxWidth:440,marginBottom:40,fontWeight:300}}>
            Arkonomy tracks your spending, analyzes patterns, and delivers real AI insights — not generic tips. Built for your actual financial life.
          </p>

          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href="https://app.arkonomy.com" style={{background:"var(--green)",color:"#0d1117",padding:"13px 28px",borderRadius:50,fontSize:15,fontWeight:600,textDecoration:"none",display:"inline-block"}}>
              Get Started →
            </a>
            <a href="#preview" style={{background:"transparent",color:"var(--text)",border:"1px solid var(--border2)",padding:"13px 28px",borderRadius:50,fontSize:15,fontWeight:500,textDecoration:"none",display:"inline-block"}}>
              View Demo
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
          <div style={{width:270,background:"var(--surface)",border:"1px solid var(--border2)",borderRadius:40,padding:18,boxShadow:"0 0 80px rgba(0,229,160,0.07),0 40px 80px rgba(0,0,0,.6)"}}>
            <div style={{width:80,height:6,background:"var(--border2)",borderRadius:3,margin:"0 auto 20px"}}/>

            {/* Header */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,4 28,26 4,26" fill="none" stroke="#00e5a0" strokeWidth="2.5" strokeLinejoin="round"/>
                  <circle cx="16" cy="25" r="2" fill="#00e5a0"/>
                </svg>
                <div>
                  <div style={{fontSize:11,fontWeight:600,color:"var(--text)"}}>Viktor</div>
                  <div style={{fontSize:9,color:"var(--text3)"}}>AI Financial Autopilot</div>
                </div>
              </div>
            </div>

            {/* Balance */}
            <div style={{marginBottom:16}}>
              <div style={{fontSize:10,color:"var(--text3)",letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>Net Balance</div>
              <div style={{fontSize:30,fontWeight:700,color:"var(--green)",letterSpacing:-1}}>$3,275.26</div>
              <div style={{display:"flex",gap:16,marginTop:8}}>
                {[{label:"Income",val:"$6,854",color:"var(--green)"},{label:"Expenses",val:"$3,579",color:"var(--red)"},{label:"Saved",val:"$3,275",color:"var(--blue)"}].map(s=>(
                  <div key={s.label}>
                    <div style={{fontSize:8,color:"var(--text3)"}}>{s.label}</div>
                    <div style={{fontSize:11,fontWeight:600,color:s.color}}>{s.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight card */}
            <div style={{background:"rgba(124,107,255,0.1)",border:"1px solid rgba(124,107,255,0.3)",borderRadius:10,padding:10,marginBottom:12}}>
              <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:6}}>
                <div style={{width:14,height:14,borderRadius:"50%",border:"1.5px solid var(--purple)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"var(--purple)"}}>⊙</div>
                <span style={{fontSize:9,color:"var(--purple)",fontWeight:600,letterSpacing:.5}}>AI Insight</span>
              </div>
              <p style={{fontSize:10,color:"var(--text)",fontWeight:600,marginBottom:4}}>You're $975 away from "Emergency Fund"</p>
              <p style={{fontSize:9,color:"var(--text2)",lineHeight:1.4}}>You can safely add $50 from your available balance.</p>
              <div style={{marginTop:8,background:"linear-gradient(90deg,var(--purple),var(--blue))",borderRadius:6,padding:"6px 0",textAlign:"center",fontSize:9,fontWeight:600,color:"#fff"}}>Add $50 now</div>
            </div>

            {/* Transactions */}
            {[
              {icon:"✈️",name:"United Airlines",cat:"Travel",amount:"-$500",neg:true},
              {icon:"🚗",name:"Uber",cat:"Transport",amount:"-$6.33",neg:true},
              {icon:"💰",name:"Payroll",cat:"Income",amount:"+$5,850",neg:false},
            ].map((tx)=>(
              <div key={tx.name} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{width:26,height:26,background:"var(--surface2)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>{tx.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,color:"var(--text)",fontWeight:500}}>{tx.name}</div>
                  <div style={{fontSize:8,color:"var(--text3)"}}>{tx.cat}</div>
                </div>
                <div style={{fontSize:10,fontWeight:600,color:tx.neg?"var(--red)":"var(--green)"}}>{tx.amount}</div>
              </div>
            ))}
          </div>

          {/* Floating card */}
          <div style={{position:"absolute",right:-20,top:"35%",background:"var(--surface)",border:"1px solid var(--border2)",borderRadius:12,padding:"12px 14px",minWidth:140,boxShadow:"0 20px 60px rgba(0,0,0,.5)"}}>
            <div style={{fontSize:9,color:"var(--text3)",marginBottom:3}}>Saved this month</div>
            <div style={{fontSize:18,fontWeight:700,color:"var(--green)",letterSpacing:-1}}>+$340</div>
            <div style={{fontSize:9,color:"var(--green)",marginTop:2}}>↑ 18% vs last month</div>
          </div>
        </div>
      </div>
    </section>
  );
}

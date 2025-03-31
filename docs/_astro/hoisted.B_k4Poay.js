let c;function _(){return c||(c=async function(){if(!window.loadPyodide){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js",document.head.appendChild(t),await new Promise(e=>t.onload=e)}console.log("Loading Pyodide...");const d=await window.loadPyodide();return console.log("Pyodide loaded successfully!"),console.log("Loading matplotlib and numpy..."),await d.loadPackage(["matplotlib","numpy"]),console.log("Packages loaded successfully!"),await d.runPythonAsync(`
          import matplotlib
          matplotlib.use('agg')
          
          # Set up functions for rendering to base64
          import matplotlib.pyplot as plt
          import io
          import base64
          
          def render_to_base64(fig=None):
              if fig is None:
                  fig = plt.gcf()
              buf = io.BytesIO()
              fig.savefig(buf, format='png', dpi=100, bbox_inches='tight')
              buf.seek(0)
              img_str = base64.b64encode(buf.getvalue()).decode('utf-8')
              return f"data:image/png;base64,{img_str}"
        `),d}()),c}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".pyodide-embed").forEach(t=>{const e={animationFrameId:null,animationPaused:!1},g=t.dataset.componentId,l=t.querySelector(".run-button"),o=t.querySelector(".pause-button"),u=t.querySelector(".reset-button"),n=t.querySelector(".output-text"),b=t.querySelector(".code-display"),h=t.querySelector(".output-canvas");let m=_();n.innerText="Python environment loading...",o.addEventListener("click",()=>{e.animationPaused?(o.textContent="Pause",e.animationPaused=!1):(o.textContent="Resume",e.animationPaused=!0)}),u.addEventListener("click",async()=>{e.animationFrameId&&(cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null),h.src="",e.animationPaused=!1,o.textContent="Pause",o.disabled=!0,u.disabled=!0,l.disabled=!1,n.innerText="Animation reset. Click 'Run Animation' to start again."}),l.addEventListener("click",async()=>{l.disabled=!0,o.disabled=!1,u.disabled=!1,n.innerText="Running...";try{let a=function(){if(!e.animationPaused)try{const i=v(y);if(!(typeof i.toJs=="function"?i.toJs():i)){cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null,n.innerText+=`
Animation complete.`;return}y++}catch(i){n.innerHTML+=`
<span class="error">Error in animation: ${i.message}</span>`,cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null;return}e.animationFrameId=requestAnimationFrame(a)};var f=a;const r=await m,P=b.textContent;let s="";r.setStdout({write:i=>{s+=i,n.innerText=s}}),r.setStderr({write:i=>{s+=`
Error: ${i}`,n.innerText=s}}),await r.runPythonAsync(`
            import matplotlib.pyplot as plt
            from js import document
            
            # Get the output image element for this specific instance
            canvas = document.getElementById('outputCanvas_${g}')
            
            # Helper function to update the canvas with matplotlib figure
            def update_canvas(fig=None):
                if fig is None:
                    fig = plt.gcf()
                # Render figure to base64 PNG and update image src
                img_data = render_to_base64(fig)
                canvas.src = img_data
                
            # Create animation helpers
            class AnimationHelper:
                def __init__(self):
                    self.frame = 0
                    self.max_frames = 100
                    self.is_initialized = False
                    self.is_running = False
                    
                def setup(self):
                    # Override in user code
                    pass
                    
                def update(self, frame):
                    # Override in user code
                    pass
                    
                def cleanup(self):
                    # Override in user code
                    pass
            
            # Default animation helper
            animation = AnimationHelper()
          `),s="",await r.runPythonAsync(P),await r.runPythonAsync(`
            # Initialize the animation
            if hasattr(animation, 'setup'):
                animation.setup()
                animation.is_initialized = True
            
            # Update function will be called from JS
            def animation_step(frame):
                if hasattr(animation, 'update'):
                    try:
                        animation.update(frame)
                        update_canvas()
                        return True
                    except Exception as e:
                        print(f"Error in animation frame {frame}: {e}")
                        return False
                return False
            
            animation.is_running = True
          `);let y=0;const v=r.globals.get("animation_step");e.animationFrameId=requestAnimationFrame(a),n.innerText="Animation running..."}catch(a){n.innerHTML=`<span class="error">Error: ${a.message||String(a)}</span>`,console.error("Python execution error:",a),l.disabled=!1,o.disabled=!0,u.disabled=!0}});const p=new IntersectionObserver(f=>{f[0].isIntersecting&&(m.then(()=>{n.innerText="Python environment ready. Click 'Run Animation' to execute."}).catch(a=>{n.innerText=`Error loading Python: ${a.message}`,console.error("Failed to load Pyodide:",a)}),p.disconnect())});p.observe(t)})});

(function(){const P=async()=>{const o=["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/codemirror.min.js","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/mode/python/python.min.js","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/matchbrackets.min.js","https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.13/addon/edit/closebrackets.min.js"];for(const t of o)await new Promise((r,u)=>{const e=document.createElement("script");e.src=t,e.onload=r,e.onerror=u,document.head.appendChild(e)})},v=(o,t)=>{const r=document.getElementById(`codeEditor_${t}`),u=o.dataset.code,e=CodeMirror(r,{value:u,mode:"python",theme:"monokai",lineNumbers:!0,indentUnit:4,lineWrapping:!0,matchBrackets:!0,autoCloseBrackets:!0,viewportMargin:1/0,gutters:["CodeMirror-linenumbers"],readOnly:!1,lineNumberFormatter:function(s){return s},extraKeys:{Tab:function(s){s.replaceSelection("    ","end")}}});return setTimeout(()=>{e.refresh()},100),e};let p;function w(){return p||(p=async function(){if(!window.loadPyodide){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js",document.head.appendChild(t),await new Promise(r=>t.onload=r)}console.log("Loading Pyodide...");const o=await window.loadPyodide();return console.log("Pyodide loaded successfully!"),console.log("Loading matplotlib and numpy..."),await o.loadPackage(["matplotlib","numpy"]),console.log("Packages loaded successfully!"),await o.runPythonAsync(`
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
          `),o}()),p}async function f(){await P(),document.querySelectorAll(".pyodide-embed").forEach(t=>{const r=t.dataset.componentId,e={animationFrameId:null,animationPaused:!1,editor:v(t,r)},s=t.querySelector(".run-button"),d=t.querySelector(".pause-button"),m=t.querySelector(".reset-button"),n=t.querySelector(".output-text"),x=t.querySelector(".output-canvas");let y=w();n.innerText="Python environment loading...",d.addEventListener("click",()=>{e.animationPaused?(d.textContent="Pause",e.animationPaused=!1):(d.textContent="Resume",e.animationPaused=!0)}),m.addEventListener("click",async()=>{e.animationFrameId&&(cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null),x.src="",e.animationPaused=!1,d.textContent="Pause",d.disabled=!0,m.disabled=!0,s.disabled=!1,n.innerText="Animation reset. Click 'Run Animation' to start again."}),s.addEventListener("click",async()=>{s.disabled=!0,d.disabled=!1,m.disabled=!1,n.innerText="Running...";try{let i=function(){if(!e.animationPaused)try{const a=F(h);if(!(typeof a.toJs=="function"?a.toJs():a)){cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null,n.innerText+=`
Animation complete.`;return}h++}catch(a){n.innerHTML+=`
<span class="error">Error in animation: ${a.message}</span>`,cancelAnimationFrame(e.animationFrameId),e.animationFrameId=null;return}e.animationFrameId=requestAnimationFrame(i)};var b=i;const l=await y,_=e.editor.getValue();let c="";l.setStdout({write:a=>{c+=a,n.innerText=c}}),l.setStderr({write:a=>{c+=`
Error: ${a}`,n.innerText=c}}),await l.runPythonAsync(`
              import matplotlib.pyplot as plt
              from js import document
              
              # Get the output image element for this specific instance
              canvas = document.getElementById('outputCanvas_${r}')
              
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
            `),c="",await l.runPythonAsync(_),await l.runPythonAsync(`
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
            `);let h=0;const F=l.globals.get("animation_step");e.animationFrameId=requestAnimationFrame(i),n.innerText="Animation running..."}catch(i){n.innerHTML=`<span class="error">Error: ${i.message||String(i)}</span>`,console.error("Python execution error:",i),s.disabled=!1,d.disabled=!0,m.disabled=!0}});const g=new IntersectionObserver(b=>{b[0].isIntersecting&&(y.then(()=>{n.innerText="Python environment ready. Click 'Run Animation' to execute."}).catch(i=>{n.innerText=`Error loading Python: ${i.message}`,console.error("Failed to load Pyodide:",i)}),g.disconnect())});g.observe(t)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f(),window.addEventListener("load",f)})();

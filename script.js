document.getElementById("java").addEventListener("click", 
    () =>{
        document.querySelector(".language-csharp").classList.add('hidden');
        document.querySelector(".language-java").classList.remove('hidden');
    });

    document.getElementById("csharp").addEventListener("click", 
    () =>{
        document.querySelector(".language-java").classList.add('hidden');
        document.querySelector(".language-csharp").classList.remove('hidden');
    });

    document.getElementById("dark").addEventListener("click", 
    () =>{
        document.getElementById("prismstyle").href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-tomorrow.min.css";
    });

    document.getElementById("light").addEventListener("click", 
    () =>{
        document.getElementById("prismstyle").href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-coy.min.css";
    });

    document.getElementById("default").addEventListener("click", 
    () =>{
        document.getElementById("prismstyle").href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css";
    });

  let li = document.getElementsByTagName("li");
  console.log(li);
  li.forEach(element => {
      console.log(element)
  });
     
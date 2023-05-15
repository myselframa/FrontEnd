# React

React is a Declarative type of programming

5 steps to convert HTML to JSX

1. All prop names follow camelcase
2. Number attribute use curly braces
3. Boolean 'true' can be written with just the property name.'False' should be written with curly braces
   4)The 'class' attribute is written as 'className'
   5)In-line styles are provided as objects

Rule #1 and #2 examples

HTML==> <input maxlength="5/> ----> JSX===> <input maxLength={5}/>

Rule #3

HTML==> <input spellCheck="true"> jSX==> <input spellCheck/>

HTML==> <input spellCheck="false"> jsx==> <input spellCheck={false}>

Rule #4

HTML==><div class="header"> JSX==> <div className="header">

Rule #5

HTML==> <a style="text-decoration:'none';padding:'5px';">

JSX===> <div style={{textDecoration:'none',padding:'5px'}}/>

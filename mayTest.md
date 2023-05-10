# MAY - TEST -

## Question 1

### JavaScript engine kya hai. Most famous JavaScript engine ki list btao.

```

JavaScript Engine एक software component होती है जो JavaScript code को उपयोगकर्ता के browser में चलाने में मदद करती है। आमतौर पर, जब आप किसी website के page पर देखते हैं और कोई भी interactivity होती है, तो JavaScript engine उस program का उपयोग करती है ताकि वह program user के browser में सही से चलता है।

कुछ उपलब्ध ज़्यादातर लोकप्रिय JavaScript engine हैं:

1. V8: V8 Google Chrome browser के लिए बनाया गया है। यह open source है और चूंकि यह अनेक लाइब्रेरी और संबंधित वर्क सपोर्ट्स करने के लिए बनाया गया है, इसलिए यह एक लोकप्रिय JavaScript engine है।

2. SpiderMonkey: Mozilla Firefox browser के लिए बनाया गया है। SpiderMonkey को Firefox द्वारा उपयोग किया जाता है और अन्य वेब applications को support करता है।

3. JavaScriptCore: Safari browser के लिए बनाया गया है और Apple company ने develop किया है।

4. Chakra: यह Microsoft Edge browser के लिए बनाया गया है और Windows 10 OS में शामिल है।

5. Nashorn: Oracle JDK के साथ शामिल है और यह JavaScript code run करने के लिए Java Virtual Machine (JVM) का उपयोग करता है।

यह कुछ JavaScript engines के examples हैं। उनमें ने लंबे समय से बहुत सारे improvements वो करते आए हैं और आज वे बहुत ही तेज और efficient हो गए हैं।

```

## Question 2

### this keyword ka use btao. This keyword ke different uses hai unhe explain kro with example

```

`this` keyword JavaScript programming language में एक विशेष शब्द है जो कोड के functions में उपयोग किया जाता है। `this` keyword का use करने के कई तरीके हो सकते हैं। हम नीचे कुछ उपयोग देखेंगे।

1. Global context में क्या this होता है?
Global context में, `this` keyword को global object से जोड़ा जाता है। इसका उपयोग करके, आप ग्लोबल वेरिएबल्स को access करने के लिए `this` keyword का उपयोग कर सकते हैं।


```

```

console.log(this.document === document); // true
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37

```

```

2. Function context में क्या this होता है?
Function context में, `this` keyword का value निर्धारित होता है जब function को call किया जाता है।  `this` keyword के value का मूल्य यदि implicit होता है, उसे सेट करने के लिए, `call`, `apply`, या `bind` methods का उपयोग किया जाता है।

```

```

function f1() {
  return this;
}
// 'this' here is the global object
console.log(f1() === window); // true

function f2() {
  "use strict";
  return this;
}
// 'this' here is undefined
console.log(f2() === undefined); // true

var obj = {a: 'Custom'};
// this property is set on the global object
var a = 'Global';
function whatsThis() {
  return this.a; // The value of 'this' is dependent on how the function is called
}

console.log(whatsThis()); // 'Global'
console.log(whatsThis.call(obj)); // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'

```

## Question 3

### Write difference between compiler and interpreter with example

```

Compiler और Interpreter दो अलग-अलग software programs होते हैं, जो कंप्यूटर को आदेश देते हैं कि कोड कैसे चलाया जाए। Compiler और Interpreter दोनों कोड execution में मदद करते हैं लेकिन कुछ अंतर होते हैं।

Compiler कोड के सभी भागों को मशीन कोड में बदलता है, जबकि Interpreter कोड की पंक्ति-पंक्ति का अंदाजा लगाता हुआ उसे execute करता है। Compiler एक बार compile कर दिया जाता है तो उसे execute करने के लिए परिवर्तन नहीं किया जा सकता है जबकि Interpreter कोड को execute करते समय compile होता है इसके कारण यह प्रत्येक बार कोड को execute करते समय compile करता है।

दोनों के बीच मुख्य अंतर है कि Compiler के compile होते समय error दिखते हैं जो उसे fix करने के लिए थोड़ा time लेते हैं। साथ ही, Compile code compile होने के बाद स्पष्ट होता है, जबकि interpreted code runtime में स्पष्ट होता है।

एक उदाहरण के साथ इसका समझावा करते हैं:

Compile Code का exampal: C लैंग्वेज में लिखा गया code compile किया जाता है। कोड compile करते समय syntax और लोगिकल error दिखते हैं और कोड काफी तेजी से execute होता है।

इंटर्प्रेटेड Code का exampal: JavaScript कोड runtime में execute किया जाता है। कोड को execute करते समय, Interpreter syntax error आदि का पता लगाता है या runtime error दिखते हैं और इसका execution थोड़ा समय लेते हैं, इसलिए interpretive code कोड को execute करने में compile code के समान धीमा होता है।

```

## Question 4

### Difference between Json and XML

```

JSON और XML दोनों data interchange formats हैं। दोनों का उपयोग data को store, transmit और इंटरएक्ट करने के लिए किया जाता है।

इसलिए, यह जानना महत्वपूर्ण है कि इन दोनों formats में क्या अंतर है।

1. JSON का पूर्ण नाम JavaScript Object Notation है जबकि XML का पूर्ण नाम Extensible Markup Language है।

2. JSON एक Lightweight format है जबकि XML एक Heavyweight format है। JSON में डेटा को छोटी JSON objects और arrays में व्यवस्थित किया जाता है, वहीं XML में डेटा को element, sub-elements और attributes के साथ XML टैग के द्वारा व्यवस्थित किया जाता है।

3. JSON एक Programming Language independent format है जबकि XML एक Markup language है, जो HTML के साथ सम्बन्धित है।

4. JSON डेटा पार्स करने में XML डेटा पार्स करने से तेज होता है।

5. डेटा संरचना के लिए, JSON एकतरफा जबकि XML बहुततरफा हो सकता है।

6. JSON कम space के साथ डेटा को store करता है जबकि XML space का ज्यादा use करता है।

इसलिए, जब हम डेटा को बेहतर रूप से transport और display करना चाहते हैं, तो JSON एक बेहतरिन विकल्प हो सकता है क्योंकि यह Lightweight होता है, जबकि जब हम बड़े, structured documents की जरूरत होती है, तो XML हमें सही विकल्प प्रदान करता है।

```

## Question 5

### In memories ke bare me btao Heap, Cache, Stack, Ram

```

हीप (Heap), कैश (Cache), स्टैक (Stack) और रैम (RAM) कंप्यूटर मेमोरी के विभिन्न प्रकार होते हैं। नीचे इनमें से कुछ के बारे में विस्तार से समझाया गया है:

1. हीप (Heap): हीप कंप्यूटर के primary memory में एक dynamic memory allocation की technique होती है। यह प्रोग्राम के runtime में data के allocation को manage करने में मदद करती है। हीप का use variables को memory में allocate करने के लिए किया जाता है। Heap को स्टैक से अलग memory में allocate किया जाता है।

2. कैश (Cache): कैश कंप्यूटर के CPU chip पर आमतौर पर स्थापित होती है। यह एक तेज memory होती है। यह CPU के registers से भी तेज होती है और इसलिए CPU chip पर रहने से CPU को स्र्किया करने का time कम होता है। कैश memory का उपयोग frequently used data के लिए किया जाता है।

3. स्टैक (Stack): स्टैक कंप्यूटर का RAM की एक छोटी area होती है। स्टैक एक Last-In-First-Out (LIFO) data structure होती है। जब function call करते हों तो, उस function call की information stack में आधार पर पुश की जाती है। स्टैक का memory allocation सुनिश्चित करता है कि function calls के बिच में variables का memory corrupt नहीं होता है।

4. रैम (RAM): रैम कंप्यूटर का primary memory होता है जिसमें program code और data होते हैं, यह CPU से communication करता है। RAM memory volatile होता है जिसका मतलब होता है कि जब computer को off कर दिया जाता है तो उसमें स्टोर किया गया सभी data हमेशा के लिए गुम हो जाता है। इसलिए, RAM memory का उपयोग program execution के लिए किया जाता है।

```

## Question 5

### Write difference between compiler and interpreter with example

```

कंपाइलर (Compiler) और इंटरप्रेटर (Interpreter) दोनों ही कंप्यूटर में कोड execute करने में मदद करते हैं। यहां हम इन दोनों में अंतर के बारे में बता रहे हैं:

कंपाइलर:

- कंपाइलर एक प्रोग्राम होता है जो एक संपूर्ण कोड को एक मशीन कोड में ट्रांसलेट करता है, जो कि एक्सेक्यूशन से पहले होता है।
- यह कंपाइलिंग से पहले कोड में errors का जांच करता है और जो errors होते हैं उनके बारे में feedback provide करता है।
- कंपाइलेड कोड को किसी भी मशीन में बड़ी आसानी से execute किया जा सकता है।
- कंपाइल की जाने वाली भाषाओं में C, C++ और Java शामिल होती हैं।

इंटरप्रेटर:

- इंटरप्रेटर एक प्रोग्राम होता है जो runtime के दौरान लाइन-बाय-लाइन स्रोत कोड को execute करता है।
- यह runtime के दौरान errors का जांच करता है और जो errors होते हैं उनके बारे में feedback provide करता है।
- इंटरप्रेटेड कोड को किसी भी मशीन में आसानी से execute किया जा सकता है जहाँ interpreter का support होता है।
- इंटरप्रेट की जाने वाली भाषाओं में Python, Ruby और JavaScript शामिल होती हैं।

इन दोनों में मुख्य अंतर यह है कि कंपाइलर कोड को पूरे ट्रांसलेट करता है जबकि एक इंटरप्रेटर स्रोत कोड को runtime के दौरान लाइन-बाय-लाइन execute करता है। इसके अलावा, कंपाइलर में faster execution का advantage होता है और एक executable file produce करता है, जिसका एक interpreted language नहीं होता है। इंटरप्रेटर platform independence और dynamic typing का advantage प्रदान करता है, जो कि एक बड़ी advantage होती हैं।

सारांश करते हुए, एक कंपाइलर संपूर्ण कोड को मशीन कोड में translate करता है, जबकि एक इंटरप्रेटर स्रोत कोड को runtime दौरान लाइन-बाय-लाइन execute करता है। दोनों में से कोई भी एक्सेcute करने के लिए किया जाने वाला चयन एप्लिकेशन की आवश्यकताओं पर निर्भर करता है।

```

## Question 6

### Write difference between creation phase and code phase

```
creation phase और कोड फेज दो सॉफ्टवेयर डेवलपमेंट में अलग-अलग चरण होते हैं। अधिकतम अंतर निम्नलिखित हैं:

creation phase:
- creation phase सॉफ्टवेयर डेवलपमेंट का प्रारंभिक चरण होता है और इसमें प्रोजेक्ट को प्लान करने की शुरुआत की जाती है, जिसमें उसके उद्देश्य, विशेषताएं और आवश्यकताएं शामिल होती हैं।
- इस चरण में, प्रोजेक्ट की आवश्यकताओं का विश्लेषण किया जाता है और उसके लिए एक प्लान तैयार किया जाता है।
- creation phase का मुख्य लक्ष्य प्रोजेक्ट की आवश्यकताओं को तय करना, एक प्रारंभिक टाइमलाइन विकसित करना और आवश्यक संसाधनों की पहचान करना होता है।
- creation phase में आमतौर पर brainstorming sessions, requirement gathering, feasibility studies और prototyping जैसी गतिविधियां शामिल होती हैं।

creation phase:
- code phase क्रिएशन फेज के बाद आता है और सॉफ्टवेयर एप्लिकेशन बनाने वाले वास्तविक कोड को लिखने को सम्मिलित करता है।
- इस चरण में, क्रिएशन फेज में तय किए गए निर्देशों और आवश्यकताओं को मशीन कोड में ट्रांसलेट करना होता है।
- code phase में, डेवलपर्स अपने कोड को लिखते, टेस्ट करते और संशोधित करते हैं ताकि वह आवश्यक निर्देशों और आवश्यकताओं को पूरा करता हो।
- code phase का मुख्य लक्ष्य वह सफल्तापूर्वक सॉफ्टवेयर एप्लिकेशन बनना होता है जो क्रिएशन फेज में निर्दिष्ट आवश्यकताओं को पूरा करता हो।
- code phase में सामान्यतः कोडिंग, यूनिट टेस्टिंग, बग फिक्सिंग और इंटीग्रेशन टेस्टिंग जैसी गतिविधियां शामिल होती हैं।

सारांश करते हुए, क्रिएशन फेज पूर्ण चार्ट सामग्री है जो प्रोजेक्ट का प्लान बनाने और निर्दिष्ट करने में मदद करता है, जबकि कोड फेज शामिल होता है जब सॉफ्टवेयर एप्ल

```

## Question 7

### Primitive and non primitive data types me difference btao and memory me kaise save hoti hai ye data types vo b btao

```

Primitive और Non-primitive data types, दोनों JavaScript में होते हैं। निम्नलिखित हैं इन दोनों में अंतर, जबकि उस Memory के बारे में भी बताया गया है जहाँ ये data types save होते हैं:

Primitive Data Types:
- Primitive data types में होते हैं number, string, boolean, null, undefined और symbol।
- Primitive data types को low level memory में save किये जाते हैं।
- Number डेटा टाइप के लिए 8 byte की memory allocate की जाती है। String डेटा टाइप के लिए variable size की memory allocate की जाती है। Boolean, null और undefined डेटा टाइप के लिए 2 byte की memory allocate की जाती है।
- Primitive data types को stack memory में save किया जाता है।

Non-primitive Data Types:
- Non-primitive data types में होते हैं object, array और function।
- Non-primitive data types को heap memory में save किया जाता है।
- जब non-primitive data types का reference use किया जाता है, तो मेमोरी में एक pointer reference होता है।
- Non-primitive data types को heap मेमोरी में save करने के लिए इतनी सारी रीसोर्सेज होती हैं जैसे garbage collector, memory allocation, या मतलब serializer/deserializer जो object को disk पर save करते हैं और लोड करते हैं।


```

## Question 8

### Shallow copy vs deep copy me difference likho with example

```
JavaScript में दो प्रकार की copying होती है - Shallow copy और Deep copy। इन दोनों में अंतर निम्न है:

Shallow Copy:
- Shallow copy में, एक object के references को copy करते हुए object के नए instance का निर्माण किया जाता है।
- इससे, पहले वाले object के references भी new object में point होते हैं, लेकिन उनमें reference के references (अर्थात nested references) केवल original object के ही point करते हैं।
- अर्थात, nested references को коpy किए बिना, एक shallow copy में सभी references को बस copy किया जाता है।
उदाहरण:
```

```
const student = {
  name: "John",
  age: 20,
  course: {
    name: "Programming",
    duration: "5 months"
  }
};

const newStudent = Object.assign({}, student);

newStudent.course.duration = "4 months";

console.log(student.course.duration); // Output: 4 months

```

```
Deep Copy:
- Deep copy में, object को पूरी तरह से clone/copy करते हुए एक नया instance बनाया जाता है।
- इससे, nested objects और nested references भी clone/copy होते हैं।
- Deep copy करने के लिए, एक recursive function लिखी जा सकती है या JSON.stringify() और JSON.parse() method का भी use किया जा सकता है।
उदाहरण:
```

```
const student = {
  name: "John",
  age: 20,
  course: {
    name: "Programming",
    duration: "5 months"
  }
};

const newStudent = JSON.parse(JSON.stringify(student));

newStudent.course.duration = "4 months";

console.log(student.course.duration); // Output: 5 months

```

## Question 9

### What is scope chain ? Explain all type of scopes with example.

```

Scope chain वह chain होती है जिससे JavaScript runtime, एक variable को search करके उसकी value को access करता है। Scope chain में, runtime उस variable को search करता है, जो कि निम्न scopes के अंदर उपलब्ध है:

1. Global Scope:
- यह सबसे outermost scope होता है जो सभी functions, blocks और code में उपलब्ध होता है।
- जब कोई variable या function global scope में define होता है, तो उसे code के अन्य सभी scopes से access किया जा सकता है।
```

```
var city = "Delhi";

function greet() {
  console.log("Hello from " + city); // Output: "Hello from Delhi"
}

greet();
```

```
2. Local Scope:
- एक function में define किए गए variable या function को local scope में define किया जाता है।
- इसलिए उस variable या function को सिर्फ उस function के अंदर accessible होने के अलावा कोई और नहीं होता।

```

```
function greet() {
  var name = "John";
  console.log("Hello " + name); // Output: "Hello John"
}

greet();
console.log(name); // Output: ReferenceError: name is not defined
```

```
3. Block Scope:
- यह ES6 के बाद से JavaScript में introduce किया गया है और `let` और `const` keywords के साथ use किया जाता है।
- एक block में define किए गए variable को block scope में define किया जाता है।
- एक block outer block में define किए गए variable में access कर सकता है।

```

```
if (true) {
  let city = "Delhi";
  const country = "India";
  console.log("Welcome to " + city + ", " + country); // Output: "Welcome to Delhi, India"
}

console.log(city); // Output: ReferenceError: city is not defined
console.log(country); // Output: ReferenceError: country is not defined
```

```
दो qualifier होते हैं scope chain में, जो यह निर्धारित करते हैं वह variable किस scope में define हैं:

1. Lexical Scope:
- एक function का parent scope उस function को define/call करने वाली environment के scope होता है।
- जैसे कि, एक inner function उस parent function के scope को access कर सकती है, जिससे वह define किया गया है।

```

```
function parent() {
  var name = "John";

  function child() {
    console.log("Hello " + name); // Output: "Hello John"
  }

  child();
}

parent();
```

```
2. Dynamic Scope:
- जब variable को search करना होता है runtime में, तो dynamic scope का use होता है।
- Dynamic scope में, variable को search करने के लिए उस function के caller के scope का use होता है, न कि function के parent scope का।
- JavaScript में, dynamic scope का use नहीं होता है।

```

## Question 9

### What is JIT? Explain

```

JIT का पूरा नाम "Just-In-Time" है। यह एक compiler होता है, जो कि runtime environment में code को compile करता है।

JavaScript में, code interpreter वह code को compile करता है जिसे एक script में लिखा गया होता है (जैसे कि function definition)। यह code interpreter यह compile नहीं करता है जो runtime में चलता है (जैसे कि function call या loop iterations)।

यहाँ, JIT compiler picture में भूमिका निभाता है। यह runtime में, code execution के समय, frequently executed code blocks को machine language में convert करता है।

JIT के मुख्य लाभों में execution speed विशेष रूप से शामिल है। क्योंकि frequently executed code blocks को compile करने से, interpreter और code execution के बीच में overhead कम होता है।

इतना ही नहीं, JIT compiler यह भी optimize करता है कि frequently executed code blocks को कैसे optimize करें। यह कुछ ऐसी तकनीकें use करता हैं जैसे जैसे code profiling, loop unrolling और dead code elimination।

JavaScript engine V8, जो Chrome browser में use होता है, एक bytecode interpreter तथा optimizing JIT compiler का use करता है।

```

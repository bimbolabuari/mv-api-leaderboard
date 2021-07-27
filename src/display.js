const displaySection = document.createElement('section');
displaySection.classList.add('display-section');

displaySection.innerHTML = `
<div class="flex justify-content scores">
    <h2>Recent scores</h2>
    <button type="reset">Refresh</button>
</div>
<ul class="display">
 <li>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>100</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>20</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>50</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>78</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>125</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>77</li>
     </ul>
     <ul class="flex">
        <li>Name<span>:</span></li>
        <li>42</li>
     </ul>
 </li>
</ul>
`;

export default displaySection;
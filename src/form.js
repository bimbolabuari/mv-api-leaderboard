const formSection = document.createElement('section');
formSection.classList.add('form-section');

formSection.innerHTML = `
<h2 class="form-section-header">Add your score</h2>
<form>
    <label><input type="text" placeholder="Your name"></label><br>
    <label><input type="number" placeholder="Your score"></label><br>
<button type="submit">Submit</button>
 </form>
`;

export default formSection;

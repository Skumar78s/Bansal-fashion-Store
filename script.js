// Tailwind Configuration for Play CDN
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#9fd3c7',
                whatsapp: '#25D366',
                dark: '#1a1a1a',
                accent: '#FF6B35',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Product Data
const products = [
    { id: 1, name: "Premium Linen Co-ord", price: "₹ 2,499", originalPrice: "₹ 3,999", rating: 4.8, reviews: 124, soldCount: 540, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L", "XL"], colors: ["#D2B48C", "#FFFFFF", "#8FBC8F"], images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"] },
    { id: 2, name: "Silk Evening Gown", price: "₹ 4,999", originalPrice: "₹ 7,999", rating: 4.9, reviews: 89, soldCount: 210, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["XS", "S", "M"], colors: ["#000000", "#4B0082", "#800000"], images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1", "https://images.unsplash.com/photo-1566174053879-31528523f8ae", "https://images.unsplash.com/photo-1518721032067-162e7aa2c730"] },
    { id: 3, name: "Emerald Green Silk Saree with Gold Zari Embroidery", price: "₹ 8,999", originalPrice: "₹ 14,999", rating: 4.9, reviews: 156, soldCount: 290, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree with intricate gold Zari work.",  sizes: ["S", "M", "L", "XL"], colors: ["#228B22", "#FFD700", "#000000"], images: [".github/workflows/imges/product/silk%20saree/silk%20saree%2001.png", ".github/workflows/imges/product/silk%20saree/silk%20saree%2002.png", ".github/workflows/imges/product/silk%20saree/silk%20saree%2003.png", ".github/workflows/imges/product/silk%20saree/silk%20saree%2004.png"] },
    { id: 4, name: "Men's and Boys' Summer Cotton-Linen T-Shirt", price: "₹ 1,899", originalPrice: "₹ 2,999", rating: 4.6, reviews: 210, soldCount: 1200, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L", "XL"], colors: ["#FFFFFF", "#D2B48C", "#8FBC8F"], images: [".github/workflows/imges/product/summer%20t-shirt/Summer%20t-shirts%2001.png", ".github/workflows/imges/product/summer%20t-shirt/Summer%20t-shirts%2002.png", ".github/workflows/imges/product/summer%20t-shirt/Summer%20t-shirts%2003.png"] },
    { id: 5, name: "Royal Red Bridal Lehenga with Intricate Gold Embroidery", price: "₹ 15,999", originalPrice: "₹ 24,999", rating: 4.9, reviews: 85, soldCount: 120, shortDesc: "A luxurious red bridal lehenga with rich gold zari embroidery and graceful dupatta.", fullDesc: "This exquisite bridal lehenga is a timeless representation of traditional elegance and craftsmanship. Designed in a rich, vibrant red hue, the ensemble showcases intricate gold zari embroidery with detailed floral and paisley patterns that reflect heritage artistry. The lehenga skirt features a voluminous flare, enhanced with dense embroidery and a finely detailed broad border, creating a grand silhouette. The matching blouse is tailored with precision, offering a structured yet graceful fit, while maintaining the same luxurious embroidery work for a cohesive look. Accompanying the outfit is a sheer dupatta, delicately adorned with embroidered motifs and an ornate border, designed to drape elegantly over the head or shoulders, adding a classic bridal charm. Crafted with high attention to fabric texture and finishing, this lehenga ensures both visual richness and comfort. Ideal for weddings, receptions, and traditional ceremonies, it delivers a regal, sophisticated presence that stands out effortlessly.", sizes: ["XS", "S", "M", "L"], colors: ["#DC143C", "#FFD700", "#8B0000"], images: [".github/workflows/imges/product/lehenga/lehenga%2001.png", ".github/workflows/imges/product/lehenga/lehenga%2002.png", ".github/workflows/imges/product/lehenga/lehenga%2003.png"] },
    { id: 7, name: "Printed Casual Kurta with Navy Leggings", price: "₹ 1,599", originalPrice: "₹ 2,499", rating: 4.7, reviews: 198, soldCount: 650, shortDesc: "Floral printed kurta with comfortable navy leggings - Complete casual look.", fullDesc: "Your All-Day Essential: Casual Printed Kurta & Leggings Set. Introducing your new favorite casual ethnic ensemble, designed for both style and maximum comfort throughout the day. This thoughtfully curated set offers a fresh take on the traditional kurta look, making it a perfect choice for various occasions. Crafted for Comfort and Fresh Style: The Kurta: Made from lightweight, breathable cotton fabric, this kurta is ideal for warm weather. It features a fresh, all-over white and yellow floral print on a serene light blue background. The classic round neck with a delicate placket detail and practical three-quarter sleeves make it as flattering as it is functional. The Leggings: The kurta is paired with soft and stretchy cotton leggings in a classic navy blue. They provide a smooth, comfortable fit that moves with you, contrasting perfectly with the light blue kurta. Effortless Elegance: This pre-coordinated set takes the guesswork out of getting ready. Simply slip it on for an instantly put-together look. Versatile Versatility: Whether you're running errands, meeting friends for a casual lunch, or attending a relaxed get-together, this ensemble is the epitome of comfortable style. A Cohesive Look: As seen in the various views, this set provides a balanced and polished aesthetic from every angle. It pairs effortlessly with casual sandals and minimal accessories. Complete Set Details: Include Items: 1 Printed Kurta, 1 Solid Navy Leggings. Material: 100% Cotton (Kurta), Cotton-Blend (Leggings). Design: Floral Print, Three-Quarter Sleeve, Round Neck. Style: Casual Ethnic, Comfort Fit. Occasion: Everyday Wear, Casual Outings, Gatherings. Care: Machine Wash Cold, Gentle Cycle.", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#ADD8E6", "#000080", "#FFFFFF"], images: [".github/workflows/imges/product/kurti/kurti%2001.png", ".github/workflows/imges/product/kurti/kurti%2002.png", ".github/workflows/imges/product/kurti/kurti%2003.png"] },
    { id: 8, name: "Knit Wool Sweater", price: "₹ 2,299", originalPrice: "₹ 3,799", rating: 4.7, reviews: 145, soldCount: 430, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L"], colors: ["#F5F5DC", "#D2691E", "#2F4F4F"], images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633", "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f", "https://images.unsplash.com/photo-1434389677669-e08b4cac3105"] },
    { id: 9, name: "Oversized Graphic Tee", price: "₹ 999", rating: 4.4, reviews: 560, soldCount: 3200, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#000000", "#FFFFFF", "#808080"], images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a", "https://images.unsplash.com/photo-1562157873-818bc0726f68"] },
    { id: 10, name: "Classic Trench Coat", price: "₹ 6,999", rating: 5.0, reviews: 42, soldCount: 95, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L"], colors: ["#C2B280", "#000000"], images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea", "https://images.unsplash.com/photo-1544022613-e87ca75a784a", "https://images.unsplash.com/photo-1511401139252-f158d3209c17"] },
    { id: 11, name: "Boy's Rainbow Stripe T-Shirt & Jeans 2-Piece Outfit", price: "₹ 1,299", originalPrice: "₹ 1,999", rating: 4.7, reviews: 145, soldCount: 420, shortDesc: "Vibrant rainbow stripe t-shirt paired with comfortable blue jeans - perfect for active kids.", fullDesc: "Complete your boy's wardrobe with this fun and stylish 2-piece outfit. Featuring a soft, breathable cotton t-shirt adorned with eye-catching rainbow stripes that add a pop of color and personality. The shirt is designed with a comfortable crew neck and short sleeves, perfect for everyday wear. Paired with classic blue denim jeans that offer durability and flexibility for active play. The jeans feature a comfortable fit, functional pockets, and an adjustable waistband for the perfect fit. This versatile set is ideal for casual outings, playdates, school, or family gatherings. Easy to care for with machine washable fabric, making it practical for busy parents. Give your child the perfect combination of comfort, style, and durability with this delightful 2-piece outfit.", sizes: ["2Y", "3Y", "4Y", "5Y", "6Y"], colors: ["#FF6B6B", "#4169E1", "#FFA500"], images: [".github/workflows/imges/product/kids/kids%2001.png", ".github/workflows/imges/product/kids/kids%2002.png", ".github/workflows/imges/product/kids/kids%2003.png"] },
    { id: 12, name: "Relaxed Cargo Pants", price: "₹ 2,199", rating: 4.7, reviews: 88, soldCount: 410, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["30", "32", "34", "36"], colors: ["#556B2F", "#000000", "#F5F5DC"], images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1", "https://images.unsplash.com/photo-1517841905240-472988babdf9", "https://images.unsplash.com/photo-1523381235208-2592230f94f9"] },
    { id: 13, name: "Men's Navy Blue Pique Polo Shirt", price: "₹ 1,299", rating: 4.6, reviews: 156, soldCount: 890, shortDesc: "Indulge in the regal charm of our exquisite Emerald Green Silk Saree. This collection features four detailed views of a beautiful Indian woman in a rich green and gold Zari silk saree, complete with traditional temple-style gold jewelry and fresh jasmine flowers. This set perfectly captures a clean, classic, and sophisticated semi-formal look.", fullDesc: "Explore the breathtaking details of our magnificent Emerald Green Silk Saree collection. This curated gallery showcases a beautiful Indian woman in four distinct poses, providing a comprehensive look at the garment's style, texture, and traditional elegance. The primary image (far left) presents a graceful, full-length standing pose, establishing the clean, structured silhouette of the saree. The deep emerald green fabric is rich and palpable, while the wide, intricate golden Zari borders define the entire drape. She is adorned with a meticulously selected set of antique gold jewelry, including a long temple-style necklace, large Jhumka earrings, a Maang Tikka, and coordinating bangles. The look is completed with a neat jasmine flower Gajra, emphasizing a timeless semi-formal aesthetic. A subsequent seated pose (center-left) highlights the flow and drape of the soft yet substantial silk pique fabric, creating elegant folds that catch the warm studio light. This perspective provides a deeper appreciation for the garment's clean lines and high-quality craftsmanship. The close-up detail shot (top-right) offers a macro-level view of the luxurious silk weave, the precise three-button placket construction, and the detailed pattern of the temple-style gold necklace. This focused perspective isolates the high quality of the materials and craftsmanship. Finally, the full-back view (far-right) showcases the clean, uninterrupted panel of the silk saree, demonstrating its structured fit and flawless finish from behind. The symmetry of the jasmine Gajra and the gold necklace against the soft green fabric reinforces the collection's clean, cohesive, and classy presentation.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#000080", "#FFFFFF", "#808080", "#000000", "#228B22"], images: [".github/workflows/imges/product/mens%20polo%20t-shirt/mens%20-polo-t-shirt.png", ".github/workflows/imges/product/mens%20polo%20t-shirt/front%20popo.png", ".github/workflows/imges/product/mens%20polo%20t-shirt/popo%20tshirts%20full%20front.png"] }
];

const testimonials = [
    { name: "Ananya R.", text: "The quality of the fabric exceeded my expectations. Kalinga NX is my new go-to for luxury wear.", rating: 5 },
    { name: "Rahul S.", text: "Fast delivery and the WhatsApp ordering process was so seamless. Highly recommended!", rating: 5 },
    { name: "Sarah J.", text: "Found exactly what I was looking for. The minimalist design fits my style perfectly.", rating: 4 },
    { name: "Vikram M.", text: "The fit is incredible. It's hard to find clothes that look this tailored off the shelf.", rating: 5 },
    { name: "Priya K.", text: "Beautiful colors and premium feel. Perfect for festive occasions!", rating: 5 },
    { name: "Ishaan T.", text: "Great customer service. They helped me pick the right size over WhatsApp.", rating: 5 }
];

let currentTestimonialSlide = 0;

let currentSlide = 0;

// Render all products to the grid
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(p => {
        // Check if image is local (starts with .) or external
        const isLocalImage = p.images[0].startsWith('.');
        const imageSrc = isLocalImage ? p.images[0] : `${p.images[0]}?auto=format&fit=crop&q=80&w=600`;
        
        return `
        <div class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-primary/20 hover:border-primary/40" onclick="openProductModal(${p.id})">
            <div class="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 relative">
                <img src="${imageSrc}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md">
                    ${p.rating} <i class="fa-solid fa-star text-yellow-400"></i>
                </div>
            </div>
            <div class="px-2 min-h-[120px] flex flex-col justify-between">
                <h4 class="font-bold text-xl mb-3 text-dark group-hover:text-primary transition-colors leading-tight">${p.name}</h4>
                <div class="flex items-center justify-between mt-auto">
                    <div class="flex flex-col">
                        <p class="text-gray-500 text-xs font-medium">was ${p.originalPrice}</p>
                        <p class="text-dark font-black text-2xl text-accent">${p.price}</p>
                    </div>
                    <button class="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `}).join('');
}

// Initialize products on load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonials();
    startTestimonialSlider();
});

function renderTestimonials() {
    const track = document.getElementById('testimonial-track');
    if (!track) return;

    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-slide px-4">
            <div class="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] text-center h-full flex flex-col justify-center transition-all duration-500 hover:bg-white hover:shadow-xl">
                <div class="flex justify-center gap-1 mb-6 text-yellow-400">
                    ${Array(t.rating).fill('<i class="fa-solid fa-star text-xs"></i>').join('')}
                </div>
                <p class="italic text-gray-700 text-xl leading-relaxed mb-8 font-medium">"${t.text}"</p>
                <p class="font-black text-dark tracking-widest uppercase text-sm">— ${t.name}</p>
            </div>
        </div>
    `).join('');
}

function startTestimonialSlider() {
    setInterval(() => {
        const track = document.getElementById('testimonial-track');
        if (!track) return;
        
        currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonials.length;
        track.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
    }, 5000);
}

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentSlide = 0;
    const modal = document.getElementById('product-modal');

    // Update content
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-price').innerText = product.price;
    document.getElementById('modal-original-price').innerText = `was ${product.originalPrice}`;
    document.getElementById('modal-short-desc').innerText = product.shortDesc;
    document.getElementById('modal-full-desc').innerText = product.fullDesc;
    document.getElementById('modal-sold').innerText = `Loved by ${product.soldCount}+ trendsetters`;
    document.getElementById('modal-rating').innerText = `${product.rating} (${product.reviews} verified reviews)`;

    // Slider images
    const sliderTrack = document.getElementById('slider-track');
    sliderTrack.innerHTML = product.images.map(img => {
        const isLocalImage = img.startsWith('.');
        const imageSrc = isLocalImage ? img : `${img}?auto=format&fit=crop&q=80&w=800`;
        return `
        <div class="slider-item">
            <img src="${imageSrc}" class="w-full h-full object-cover">
        </div>
    `}).join('');
    sliderTrack.style.transform = `translateX(0%)`;

    // Sizes and Colors with selection
    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0];

    document.getElementById('modal-sizes').innerHTML = product.sizes.map(s => `<button class="size-btn px-4 py-2 border-2 border-primary/20 rounded-lg font-bold hover:bg-primary hover:text-white transition ${s === selectedSize ? 'bg-primary text-white border-primary' : 'bg-white text-dark'}" data-size="${s}">${s}</button>`).join('');
    document.getElementById('modal-colors').innerHTML = product.colors.map(c => `<div class="color-btn w-10 h-10 rounded-full border-4 border-white shadow-md cursor-pointer hover:scale-110 transition-transform ${c === selectedColor ? 'ring-4 ring-primary/50' : ''}" style="background-color: ${c}" data-color="${c}"></div>`).join('');

    // Add event listeners for size and color selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'border-primary');
                b.classList.add('bg-white', 'text-dark');
            });
            this.classList.add('bg-primary', 'text-white', 'border-primary');
            this.classList.remove('bg-white', 'text-dark');
            selectedSize = this.dataset.size;
        });
    });

    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('ring-4', 'ring-primary/50'));
            this.classList.add('ring-4', 'ring-primary/50');
            selectedColor = this.dataset.color;
        });
    });

    // Initialize tabs
    initializeTabs();

    // WhatsApp Button - Show form instead
    document.getElementById('modal-wa-btn').onclick = function(e) {
        e.preventDefault();
        showOrderForm(product, selectedSize, selectedColor);
    };

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function moveSlider(direction) {
    const track = document.getElementById('slider-track');
    const totalSlides = track.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tab functionality for modal
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'text-primary', 'border-b-2', 'border-primary', 'bg-primary/5');
                btn.classList.add('text-gray-500');
            });

            // Add active class to clicked button
            button.classList.add('active', 'text-primary', 'border-b-2', 'border-primary', 'bg-primary/5');
            button.classList.remove('text-gray-500');

            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.add('hidden'));

            // Show selected tab pane
            const tabId = button.dataset.tab + '-tab';
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
}

// Order Form Functions
function showOrderForm(product, selectedSize, selectedColor) {
    document.getElementById('order-form').classList.remove('hidden');
    
    // Update order summary
    const colorName = selectedColor === '#000080' ? 'Navy Blue' : 
                     selectedColor === '#FFFFFF' ? 'White' : 
                     selectedColor === '#808080' ? 'Gray' : 
                     selectedColor === '#000000' ? 'Black' : 
                     selectedColor === '#228B22' ? 'Green' : 'Custom Color';
    
    document.getElementById('order-summary').innerHTML = `
        <strong>${product.name}</strong><br>
        Size: ${selectedSize}<br>
        Color: ${colorName}<br>
        Price: ${product.price}
    `;
    
    // Store product info for form submission
    window.currentOrder = { product, selectedSize, selectedColor };
}

function hideOrderForm() {
    document.getElementById('order-form').classList.add('hidden');
}

// Initialize products on load
document.addEventListener('DOMContentLoaded', () => {
    // Handle order form submission
    const orderForm = document.getElementById('order-form-element');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('first-name').value,
                lastName: document.getElementById('last-name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                pincode: document.getElementById('pincode').value
            };
            
            const order = window.currentOrder;
            const colorName = order.selectedColor === '#000080' ? 'Navy Blue' : 
                             order.selectedColor === '#FFFFFF' ? 'White' : 
                             order.selectedColor === '#808080' ? 'Gray' : 
                             order.selectedColor === '#000000' ? 'Black' : 
                             order.selectedColor === '#228B22' ? 'Green' : 'Custom Color';
            
            // Create WhatsApp message
            const message = `*New Order - Kalinga NX*\n\n` +
                          `*Customer Details:*\n` +
                          `Name: ${formData.firstName} ${formData.lastName}\n` +
                          `Phone: ${formData.phone}\n` +
                          `Email: ${formData.email}\n\n` +
                          `*Delivery Address:*\n` +
                          `${formData.address}\n` +
                          `${formData.city} - ${formData.pincode}\n\n` +
                          `*Order Details:*\n` +
                          `Product: ${order.product.name}\n` +
                          `Size: ${order.selectedSize}\n` +
                          `Color: ${colorName}\n` +
                          `Price: ${order.product.price}\n\n` +
                          `Thank you for your order! 🎉`;
            
            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/9108458054491?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Close modal and form
            hideOrderForm();
            closeProductModal();
            
            // Reset form
            orderForm.reset();
        });
    }
    
    renderProducts();
    renderTestimonials();
    startTestimonialSlider();
});
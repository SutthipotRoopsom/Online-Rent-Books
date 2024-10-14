// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import UserProfile from './pages/UserProfile';
import Checkout from './components/Checkout';
import CategoryFilter from './components/CategoryFilter';
import BookDetail from './pages/BookDetails';  // Import BookDetail component
import './styles/App.css';
import './styles/BookCard.css';

const App = () => {
  const initialBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: ' F. Scott Fitzgerald',
      description: ' นิยายที่ตั้งอยู่ในยุคแจ๊ส สํารวจธีมของความหรูหราและความฟุ่มเฟือย',
      category: 'Fiction',
      price: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
      fileLink: "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html"
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: ' Harper Lee',
      description: ' นิยายเกี่ยวกับปัญหาสำคัญของการข่มขืนและความไม่เท่าเทียมทางเชื้อชาติ ผ่านมุมมองของเด็ก',
      category: 'Fiction',
      price: 12,
      image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
      fileLink:"https://fliphtml5.com/dgcyo/omxg/To_Kill_A_Mockingbird/"
    },
    {
      id: 3,
      title: '1984',
      author: ' George Orwell',
      description: ' นิยายดิสโทเปียที่สำรวจอันตรายของระบอบเผด็จการและอุดมการณ์ทางการเมืองที่รุนแรง',
      category: 'Fiction',
      price: 15,
      image: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg',
      fileLink:"https://www.globalgreyebooks.com/online-ebooks/george-orwell_nineteen-eighty-four_complete-text.html"
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: ' Jane Austen',
      description: ' นิยายโรแมนติกที่วิพากษ์วิจารณ์ชนชั้นสูงในอังกฤษตอนปลายศตวรรษที่ 18',
      category: 'Fiction',
      price: 9,
      image: 'https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg',
      fileLink:"https://fliphtml5.com/kmpjh/uneq/PRIDE_AND_PREJUDICE/"
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: ' J.D. Salinger',
      description: ' เรื่องราวเกี่ยวกับความรู้สึกแปลกแยกของวัยรุ่นและการสูญเสียความบริสุทธิ์ในอเมริกาหลังสงคราม',
      category: 'Fiction',
      price: 11,
      image: 'https://www.asiabooks.com/media/catalog/product/cache/a5ac216be58c0cbce1cb04612ece96dc/1/0/1000237540_front_xxxl_114.jpg',
      fileLink:"https://fliphtml5.com/gafpm/kkok/The_Catcher_in_the_Rye/s"
    },
    {
      id: 6,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: ' การสำรวจที่คิดอย่างลึกซึ้งเกี่ยวกับประวัติศาสตร์และผลกระทบของมนุษย์โฮโมเซเปียน',
      category: 'Non-Fiction',
      price: 20,
      image: 'https://inwfile.com/s-dl/73v5gp.jpg',
      fileLink:"https://fliphtml5.com/okoeb/odsu/Sapiens__A_Brief_History_of_Humankind_%28_PDFDrive_%29/"
    },
    {
      id: 7,
      title: 'Educated',
      author: 'Tara Westover',
      description: ' บันทึกความทรงจำเกี่ยวกับผู้หญิงที่เติบโตในครอบครัวที่เข้มงวดและใช้ความรุนแรง แต่สามารถหลบหนีมาเรียนรู้เกี่ยวกับโลกกว้าง',
      category: 'Non-Fiction',
      price: 18,
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg'
    },
    {
      id: 8,
      title: 'Becoming',
      author: ' Michelle Obama',
      description: ' บันทึกความทรงจำของอดีตสุภาพสตรีหมายเลขหนึ่งของสหรัฐอเมริกา ที่พูดคุยเกี่ยวกับชีวิต ค่านิยม และประสบการณ์ของเธอ',
      category: 'Non-Fiction',
      price: 22,
      image: 'https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 9,
      title: 'The Immortal Life of Henrietta Lacks',
      author: ' Rebecca Skloot',
      description: ' หนังสือที่เล่าถึงเรื่องราวของเฮนรีเอตต้า แลคส์และเซลล์ที่ไร้ความตายที่ได้มาจากเซลล์ของเธอ',
      category: 'Non-Fiction',
      price: 15,
      image: 'https://m.media-amazon.com/images/I/81coyP8S-ZL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: ' Mark Manson',
      description: ' หนังสือแนวเซลฟ์เฮลป์ที่เสนอแนวทางที่ตรงไปตรงมาสำหรับการพัฒนาตนเอง',
      category: 'Non-Fiction',
      price: 16,
      image: 'https://bci.kinokuniya.com/jsp/images/book-img/97800/97800626/9780062641540.JPG'
    },
    {
      id: 11,
      title: 'The Alchemist',
      author: ' Paulo Coelho',
      description: ' หนังสือปรัชญาเกี่ยวกับคนเลี้ยงแกะชื่อซานติอาโกที่ฝันว่าจะหาสมบัติในอียิปต์',
      category: 'Fiction',
      price: 14,
      image: 'https://api.chulabook.com/images/pid-71418.jpg'
    },
    {
      id: 12,
      title: 'The Book Thief',
      author: ' Markus Zusak',
      description: ' นิยายที่เล่าโดยความตาย เกี่ยวกับเด็กสาวในเยอรมนีที่นาซีซึ่งค้นพบความสงบสุขด้วยการขโมยหนังสือ',
      category: 'Fiction',
      price: 13,
      image: 'https://th-test-11.slatic.net/p/efc099a2ba478c823cee6d1825b5eb2e.jpg'
    },
    {
      id: 13,
      title: 'The Power of Habit',
      author: ' Charles Duhigg',
      description: ' การสำรวจเกี่ยวกับวิทยาศาสตร์ของการสร้างนิสัยและวิธีการเปลี่ยนแปลง',
      category: 'Self-Help',
      price: 15,
      image: 'https://m.media-amazon.com/images/I/71eoUH2EngL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 14,
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      description: 'นิยายที่เกี่ยวกับวัยรุ่นที่มีปัญหาทางสังคมในการใช้ชีวิตในโรงเรียน',
      category: 'Young Adult',
      price: 12,
      image: 'https://storage.naiin.com/system/application/bookstore/resource/product/202303/575807/1000259963_front_XXL.jpg?imgname=The-perks-of-being-a-wallflower-%E0%B8%82%E0%B8%AD%E0%B9%83%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%A3%E0%B9%8C'
    },
    {
      id: 15,
      title: 'The Girl with the Dragon Tattoo',
      author: ' Stieg Larsson',
      description: ' นิยายระทึกขวัญเกี่ยวกับนักข่าวและแฮกเกอร์ที่สอบสวนการหายตัวไปที่เกิดขึ้นเมื่อหลายสิบปีก่อน',
      category: 'Thriller',
      price: 18,
      image: 'https://m.media-amazon.com/images/I/8133MFwkxOL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 16,
      title: 'The Kite Runner',
      author: ' Khaled Hosseini',
      description: ' เรื่องราวที่น่าติดตามเกี่ยวกับมิตรภาพและการไถ่ถอนที่เกิดขึ้นในประเทศอัฟกานิสถาน',
      category: 'Fiction',
      price: 16,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kite_runner.jpg/220px-Kite_runner.jpg'
    },
    {
      id: 17,
      title: 'The Fault in Our Stars',
      author: ' John Green',
      description: ' เรื่องราวที่ทำให้หัวใจสลายเกี่ยวกับวัยรุ่นสองคนที่พบกันในกลุ่มสนับสนุนผู้ป่วยมะเร็ง',
      category: 'Young Adult',
      price: 14,
      image: 'https://cdn01.sapnaonline.com/product_media/9780141345659/md_9780141345659_230620221005914.jpg'
    },
    {
      id: 18,
      title: 'Life of Pi',
      author: ' Yann Martel',
      description: ' เรื่องราวเกี่ยวกับเด็กชายที่ติดอยู่บนเรือชูชีพกับเสือเบงกอล',
      category: 'Fiction',
      price: 15,
      image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg'
    },
    {
      id: 19,
      title: 'The Hunger Games',
      author: ' Suzanne Collins',
      description: ' เรื่องราวที่น่าตื่นเต้นเกี่ยวกับการเอาตัวรอดในโลกหลังหายนะ',
      category: 'Fiction',
      price: 12,
      image: 'https://bci.kinokuniya.com/jsp/images/book-img/97814/97814071/9781407132082.JPG'
    },
    {
      id: 20,
      title: 'Where the Crawdads Sing',
      author: ' Delia Owens',
      description: ' นิยายที่เกี่ยวกับการเติบโตและฆาตกรรมในบึงของนอร์ทแคโรไลนา สำรวจธีมของการโดดเดี่ยวและธรรมชาติ',
      category: 'Fiction',
      price: 18,
      image: 'https://m.media-amazon.com/images/I/81HBfPTAS7L._AC_UF894,1000_QL80_.jpg'
    }
  ];
  

    const [books, setBooks] = useState(initialBooks);
    const [filteredBooks, setFilteredBooks] = useState(initialBooks);
    const [rentedBooks, setRentedBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const categories = ['All Categories', ...new Set(books.map(book => book.category))];

    const handleSearch = (query) => {
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredBooks(filteredBooks);
    };

    const handleRent = (id) => {
        const rentedBook = filteredBooks.find(book => book.id === id);
        if (rentedBook) {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            setRentedBooks([...rentedBooks, { ...rentedBook, quantity: 1, expiration: expirationDate, orderDate: new Date() }]);
        }
    };

    const handleSelectCategory = (category) => {
      console.log('Selected Category:', category); // แสดงหมวดหมู่ที่เลือก
      setSelectedCategory(category);
      
      if (category === 'All Categories') {
          setFilteredBooks(initialBooks); // แสดงหนังสือทั้งหมด
      } else {
          const filteredBooks = initialBooks.filter(book => book.category === category);
          setFilteredBooks(filteredBooks); // แสดงหนังสือที่ตรงกับหมวดหมู่ที่เลือก
      }
    };
  

    // ... (other state variables)
    const [orderHistory, setOrderHistory] = useState([]); // Track order history

    const handleOrder = (orderedBooks) => {
      const totalPrice = orderedBooks.reduce((total, book) => total + (book.price * (book.rentalDays || 1)), 0);
      alert('Order placed! Total Price: ' + totalPrice + '. Your rented books will expire on: ' + orderedBooks[0]?.expiration.toLocaleDateString());
  
      // Save order details to order history
      setOrderHistory([...orderHistory, ...orderedBooks]);
  
      setRentedBooks([]); // Clear rented books after order
  };
  

    return (
        <Router>
            <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
            <Routes>
                <Route path="/" element={<Home onSearch={handleSearch} books={filteredBooks} onRent={handleRent} />} />
                <Route path="/search" element={<SearchResults books={filteredBooks} onRent={handleRent} />} />
                <Route path="/profile" element={<UserProfile previouslyOrderedBooks={orderHistory} />} /> {/* Pass order history */}
                <Route path="/checkout" element={<Checkout rentedBooks={rentedBooks} onOrder={handleOrder} setRentedBooks={setRentedBooks} />} />
                <Route path="/books/:id" element={<BookDetail books={books} />} />
            </Routes>
        </Router>
    );
};

export default App;
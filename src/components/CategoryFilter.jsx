// src/components/CategoryFilter.jsx
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-filter" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;

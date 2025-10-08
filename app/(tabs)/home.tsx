import { Product, useProductStore } from '@/store/useProductStore';
import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
    const { products, getAll, addToCart } = useProductStore()
    useEffect(() => {
        getAll();
    }, [])

    function add(data: Product) {
        addToCart(data);
    }
    function renderItem({ item }: { item: Product }) {
        return (
            <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.name} numberOfLines={2}>{item.title}</Text>
                </View>
                <TouchableOpacity onPress={() => add(item)} style={styles.addBtn}>
                    <Text style={styles.addBtnText}>Add to Cart</Text>
                </TouchableOpacity>
            </TouchableOpacity >
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Featured Products</Text>
                <Text style={styles.headerSubtitle}>{products.length} items</Text>
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#212529',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#6c757d',
    },
    listContent: {
        padding: 16,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 85,
        backgroundColor: '#f8f9fa',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#ff4757',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
    },
    favoriteBtn: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    favoriteIcon: {
        fontSize: 16,
    },
    content: {
        padding: 12,
    },
    category: {
        fontSize: 10,
        fontWeight: '600',
        color: '#6c757d',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#212529',
        marginBottom: 6,
        height: 36,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 4,
    },
    star: {
        fontSize: 10,
        color: '#ffd43b',
    },
    ratingText: {
        fontSize: 11,
        color: '#495057',
        fontWeight: '500',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        color: '#212529',
        marginRight: 6,
    },
    originalPrice: {
        fontSize: 14,
        color: '#adb5bd',
        textDecorationLine: 'line-through',
    },
    addBtn: {
        backgroundColor: '#212529',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    addBtnText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});
export default Home
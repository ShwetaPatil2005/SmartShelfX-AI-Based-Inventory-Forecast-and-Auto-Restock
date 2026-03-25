package edu.infosys.inventoryApplication.dao;

import java.util.List;

import edu.infosys.inventoryApplication.bean.ProductSale;
import edu.infosys.inventoryApplication.bean.Transaction;

public interface TransactionDao {
	
    void saveTransaction(Transaction transaction);
    //List<Transaction> getAllTransactions();
    Transaction getTransactionById(String id);
    void deleteTransactionById(String id);
    public List<Transaction> findTransactionsByType(String type);
    public String findMaxTransactionIdByType(String type);
    
    public List<Double> getDemandByProduct(String productId);
    public List<ProductSale> getProductWiseTotalSale();
    
    

}

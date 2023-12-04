package com.kh.bigFish.store.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.bigFish.attachment.model.vo.Attachment;
import com.kh.bigFish.store.model.vo.Store;
import com.kh.bigFish.store.model.vo.Ticket;

@Repository
public class StoreDao {
	
	
	public int checkBusinessNo(SqlSessionTemplate sqlSession, String businessNo) {
		return sqlSession.selectOne("storeMapper.checkBusinessNo",businessNo);
	}
	
	public int insertStore(SqlSessionTemplate sqlSession, Store s) {
		return sqlSession.insert("storeMapper.insertStore",s);
	}
	
	public int insertTicket(SqlSessionTemplate sqlSession,Ticket t) {
		return sqlSession.insert("storeMapper.insertTicket",t);
	}
	
	public int insertAttachment(SqlSessionTemplate sqlSession, Attachment a) {
		return sqlSession.insert("storeMapper.insertAttachment",a);
	}
}

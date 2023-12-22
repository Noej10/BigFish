package com.kh.bigFish.shop.model.service;

import java.util.ArrayList;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.bigFish.attachment.model.vo.Attachment;
import com.kh.bigFish.common.model.vo.PageInfo;
import com.kh.bigFish.shop.model.dao.ShopDao;
import com.kh.bigFish.shop.model.vo.Shop;

@Service
public class ShopServiceImpl implements ShopService{

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired ShopDao shopDao; 
	
	@Override
	public int selectListCount() {
		return shopDao.selectListCount(sqlSession);
	}

	@Override
	public ArrayList<Shop> selectList(PageInfo pi) {
		return shopDao.selectList(sqlSession, pi);
	}

	@Override
	public int insertShopFile(Attachment at) {
		return shopDao.insertShopFile(sqlSession, at);
	}

	@Override
	public int insertShop(Shop s) {
		return shopDao.insertShop(sqlSession, s);
	}

	@Override
	public Shop selectShop(int sno) {
		return shopDao.selectShop(sqlSession, sno);
	}

	@Override
	public int updateShop(Shop s) {
		return shopDao.updateShop(sqlSession, s);
	}

	@Override
	public int updateFileShop(Shop s) {
		return shopDao.updateFileShop(sqlSession, s);
	}

	@Override
	public int deleteShop(int sno) {
		return shopDao.deleteShop(sqlSession, sno);
	}

	@Override
	public int insertParameter(String parameter) {
		
		return shopDao.insertParameter(sqlSession, parameter);
	}

	@Override
	public int updatePg_token(String j) {
		return shopDao.updatePg_token(sqlSession,j);
	}
}

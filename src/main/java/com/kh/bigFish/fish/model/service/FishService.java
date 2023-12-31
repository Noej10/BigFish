package com.kh.bigFish.fish.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.kh.bigFish.common.model.vo.PageInfo;
import com.kh.bigFish.fish.model.vo.Fish;
public interface FishService {
	
	int selectFreshListCount();
	
	ArrayList<Fish> selectFreshList(PageInfo pi);
		
	int selectSeaListCount();
	
	ArrayList<Fish> selectSeaList(PageInfo pi);
	
	int insertFishInfo(Fish f);
	
	int increaseCount(int fishNo);
	
	Fish selectFish(int fishNo);
	
	int updateFish(Fish f);
	
	int deleteFish(int fishNo);

	int selectSearchListCount(HashMap<String, String> map);
	ArrayList<Fish> selectSearchList(HashMap<String, String> map, PageInfo pi);
	
}

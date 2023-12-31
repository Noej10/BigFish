package com.kh.bigFish.study.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.kh.bigFish.attachment.model.vo.Attachment;
import com.kh.bigFish.common.model.vo.PageInfo;
import com.kh.bigFish.member.model.vo.Member;
import com.kh.bigFish.reply.model.vo.Reply;
import com.kh.bigFish.study.model.vo.Study;
import com.kh.bigFish.study.model.vo.StudyGood;

@Repository
public class StudyDao {
	
	public int selectListCount(SqlSessionTemplate sqlSession) {
		return sqlSession.selectOne("studyMapper.selectListCount");
	}
	
	public ArrayList<Study> selectList(SqlSessionTemplate sqlSession, PageInfo pi) {
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		int limit = pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, limit);
		return (ArrayList)sqlSession.selectList("studyMapper.selectList", null, rowBounds);
	}
	
	public int insertStudy(SqlSessionTemplate sqlSession, Study s) {
		return sqlSession.insert("studyMapper.insertStudy", s);
	}										
	
	public int increaseCount(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.update("studyMapper.increaseCount", studyNo);
	}
	
	public Study selectStudy(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.selectOne("studyMapper.selectStudy", studyNo);
	}
	
	public int deleteStudy(SqlSessionTemplate sqlSession, int studyNo) {
		return sqlSession.update("studyMapper.deleteStudy", studyNo);
	}
	
	public int updateStudy(SqlSessionTemplate sqlSession, Study s) {
		return sqlSession.update("studyMapper.updateStudy", s);
	}
	
	public ArrayList<Reply> selectReplyList(SqlSessionTemplate sqlSession, int sno) {
		ArrayList<Reply> A = (ArrayList)sqlSession.selectList("replyMapper.selectReplyList", sno);
		return A;
	}
	
	public int insertReply(SqlSessionTemplate sqlSession, Reply r) {
		return sqlSession.insert("replyMapper.insertReply", r);
	}
	
	public int selectSearchListCount(SqlSessionTemplate sqlSession, HashMap<String, String> map) {
		return sqlSession.selectOne("studyMapper.selectSearchListCount", map);	
	}
	
	public ArrayList<Study> selectSearchList(SqlSessionTemplate sqlSession, HashMap<String, String> map, PageInfo pi){
		int offset = (pi.getCurrentPage() - 1) * pi.getBoardLimit();
		int limit = pi.getBoardLimit();
		
		RowBounds rowBounds = new RowBounds(offset, limit);
		return (ArrayList)sqlSession.selectList("studyMapper.selectSearchList", map, rowBounds);
	}
	
	public ArrayList<Study> selectSearchList(SqlSessionTemplate sqlSession, String keyword) {
		return (ArrayList)sqlSession.selectList("studyMapper.selectSearchList", keyword);
	}
	
	public StudyGood likeResult(SqlSessionTemplate sqlSession, StudyGood sg) {
		System.out.println(sg);
		return sqlSession.selectOne("studyMapper.likeResult", sg);
	}
	
	public int studyUpdateLike(SqlSessionTemplate sqlSession, StudyGood sg, String result) {
		
		Map<String, Object> params = new HashMap<>();
	    params.put("result", result);
	    params.put("studyNo", sg.getRstudyNo());
	    params.put("rmemNo", sg.getRmemNo());
		
		return sqlSession.update("studyMapper.studyUpdateLike", params);
	}
	
	public StudyGood checkLikeTable(SqlSessionTemplate sqlSession, int memNo, int rstudyNo) {
		Map<String, Object> params = new HashMap<>();
		params.put("memNo", memNo);
	    params.put("sno", rstudyNo);
		return sqlSession.selectOne("studyMapper.checkLikeTable", params);
	}
	
	public int createLikeTable(SqlSessionTemplate sqlSession, int memNo, int sno) {
		Map<String, Object> params = new HashMap<>();
		params.put("memNo", memNo);
	    params.put("sno", sno);
		return sqlSession.insert("studyMapper.createLikeTable", params);
	}
	
	public ArrayList<Study> selectStudyList(SqlSessionTemplate sqlSession, String keyword) {
		return (ArrayList)sqlSession.selectList("studyMapper.selectStudyList", keyword);
	}

	public ArrayList<Study> selectmainList(SqlSessionTemplate sqlSession) {
		return (ArrayList)sqlSession.selectList("studyMapper.selectmainList");
	}

	public int studyGoodCount(SqlSessionTemplate sqlSession, int sno) {
	//	int o = sqlSession.selectOne("studyMapper.studyGoodCount", sno);
		return sqlSession.selectOne("studyMapper.studyGoodCount", sno);
	}

	public int studyUpdateLike1(SqlSessionTemplate sqlSession, StudyGood sg) {
		
		Map<String, Object> params = new HashMap<>();
		
		params.put("rstudyNo", sg.getRstudyNo());
		params.put("rmemNo", sg.getRmemNo());
		
		return sqlSession.selectOne("studyMapper.studyUpdateLike1", params);
	}

	public int deleteReply(SqlSessionTemplate sqlSession, int replyNo) {
		return sqlSession.update("studyMapper.deleteReply", replyNo);
	}

}

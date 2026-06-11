import { useState, useEffect, useCallback } from "react";
import { SlideLayout, GoldAccent, SlideNumber, SectionTag, FlowArrow, HighlightCard, ImagePlaceholder } from "./components/SlideLayout";

// Unsplash images
const IMG_WARRIOR = "https://images.unsplash.com/photo-1460194436988-671f763436b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGZhbnRhc3klMjB3YXJyaW9yJTIwYmF0dGxlJTIwZGFya3xlbnwxfHx8fDE3ODExNTgzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_DEMON_QUEEN = "https://images.unsplash.com/photo-1762217235227-68f0f5c72747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxVbnJlYWwlMjBFbmdpbmUlMjBnYW1lJTIwYm9zcyUyMG1vbnN0ZXIlMjBkZW1vbiUyMGFuY2llbnR8ZW58MXx8fHwxNzgxMTU4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_VILLAIN = "https://images.unsplash.com/photo-1671736782387-e05c57d90961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxVbnJlYWwlMjBFbmdpbmUlMjBnYW1lJTIwYm9zcyUyMG1vbnN0ZXIlMjBkZW1vbiUyMGFuY2llbnR8ZW58MXx8fHwxNzgxMTU4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_DEMON = "https://images.unsplash.com/photo-1633329858566-11b6c8748de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVbnJlYWwlMjBFbmdpbmUlMjBnYW1lJTIwYm9zcyUyMG1vbnN0ZXIlMjBkZW1vbiUyMGFuY2llbnR8ZW58MXx8fHwxNzgxMTU4MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_BLUE_ABSTRACT = "https://images.unsplash.com/photo-1683064325134-3acfdef9c6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYmx1ZSUyMGFic3RyYWN0JTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWMlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc4MTE1ODM5Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const TOTAL_SLIDES = 19;

// --- Individual Slide Components ---

function Slide1() {
  return (
    <SlideLayout bgImage={IMG_DEMON_QUEEN}>
      <div className="flex flex-col items-center justify-center h-full text-center px-16">
        <div className="mb-4">
          <GoldAccent className="w-24 h-1 mx-auto mb-6" />
        </div>
        <h1 className="text-7xl font-black tracking-widest text-white mb-4 drop-shadow-lg"
          style={{ textShadow: "0 0 40px rgba(251,191,36,0.4)" }}>
          ProjectLAR
        </h1>
        <GoldAccent className="w-48 h-0.5 mx-auto mb-6" />
        <p className="text-2xl text-blue-200 font-light tracking-wider mb-2">
          Unreal Engine C++ 쿼터뷰 액션 RPG 프로토타입
        </p>
        <p className="text-base text-blue-400 tracking-widest uppercase mt-2">
          포트폴리오 기술 발표
        </p>
        <div className="mt-12 flex items-center gap-3 text-blue-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>로스트아크 스타일 쿼터뷰 전투 및 UI 기반 프로토타입</span>
          <div className="w-2 h-2 rounded-full bg-amber-400" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide2() {
  const points = [
    { icon: "⚔️", text: "쿼터뷰 액션 전투" },
    { icon: "🖱️", text: "마우스 기반 이동 및 공격 방향" },
    { icon: "🎯", text: "스킬 슬롯 시스템" },
    { icon: "🎒", text: "인벤토리, 장비, 강화" },
    { icon: "👹", text: "보스 패턴 및 텔레그래프 시스템" },
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-16">
          <SectionTag>프로젝트 개요</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">ProjectLAR란?</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <p className="text-blue-200 text-base leading-relaxed mb-8">
            로스트아크에서 영감을 받은 쿼터뷰 액션 RPG 프로토타입으로,<br />
            <span className="text-amber-400 font-semibold">Unreal Engine C++</span>로 제작되었습니다.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-blue-800 border-opacity-50">
                <span className="text-xl w-8">{p.icon}</span>
                <span className="text-blue-100 text-sm">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
		<img src="/images/sadon.webp" alt="UI" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide3() {
  const loop = ["이동", "조준", "공격 / 스킬", "쿨다운", "루팅 / 인벤토리", "장비 / 강화", "보스 전투"];
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full px-12">
        <SectionTag>핵심 게임플레이</SectionTag>
        <h2 className="text-4xl font-bold text-white mb-2 text-center">핵심 게임플레이 루프</h2>
        <GoldAccent className="w-16 h-0.5 mx-auto mb-10" />
        {/* Circular-style flow */}
        <div className="flex flex-wrap items-center justify-center gap-0">
          {loop.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-center text-sm font-bold text-white border-2 border-blue-500"
                  style={{ background: "rgba(15,40,120,0.85)", boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
                >
                  <span className="px-2 leading-tight">{step}</span>
                </div>
                <div className="text-amber-400 text-xs mt-1 font-mono">0{i + 1}</div>
              </div>
              {i < loop.length - 1 && (
                <div className="text-amber-400 text-xl font-bold mx-1">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 px-6 py-3 rounded-lg border border-amber-400 border-opacity-30"
          style={{ background: "rgba(40,30,0,0.4)" }}>
          <p className="text-amber-300 text-sm text-center">
            전투 → 성장 → 보스 도전의 반복 구조로 RPG의 핵심 루프를 구현
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide4() {
  const skills = [
    { key: "우클릭", desc: "마우스 월드 위치 이동" },
    { key: "기본 공격", desc: "마우스 방향 기반 공격" },
    { key: "대시/블링크", desc: "순간이동형 회피" },
    { key: "Q, W, E, R", desc: "스킬 슬롯 입력" },
    { key: "A, S, D, F, V", desc: "추가 스킬 슬롯 입력" },
    { key: "1, 2, 3, 4", desc: "빠른 아이템 사용" },
    { key: "스크롤", desc: "카메라 줌 인/아웃" },
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-14">
          <SectionTag>플레이어 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">플레이어 컨트롤 시스템</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="grid grid-cols-1 gap-2">
            {skills.map((s, i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-blue-800 border-opacity-30">
                <span className="text-amber-400 font-bold text-sm w-32 shrink-0 font-mono">{s.key}</span>
                <span className="text-blue-200 text-sm">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
		<img src="/images/GameSystemUI.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide5() {
  const states = [
    { name: "Idle", color: "#3b82f6", desc: "기본 대기 상태" },
    { name: "BasicAttack", color: "#f59e0b", desc: "기본 공격 실행 중" },
    { name: "Dash", color: "#10b981", desc: "대시/블링크 이동" },
    { name: "Casting", color: "#8b5cf6", desc: "스킬 시전 중" },
    { name: "Skill", color: "#ef4444", desc: "스킬 실행 중" },
    { name: "HitReaction", color: "#f97316", desc: "피격 반응" },
    { name: "Dead", color: "#6b7280", desc: "사망 상태" },
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-14">
          <SectionTag>플레이어 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">액션 상태 관리</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="flex flex-wrap gap-2 mb-6">
            {states.map((s, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-md border border-opacity-40"
                style={{ background: `${s.color}22`, borderColor: s.color }}>
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="text-white text-xs font-mono font-bold">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex items-start gap-3">
              <div className="text-amber-400 mt-1">✦</div>
              <p className="text-blue-200 text-sm">충돌하는 액션 간 <span className="text-amber-400 font-semibold">상호 배제</span> 방지</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-amber-400 mt-1">✦</div>
              <p className="text-blue-200 text-sm">이동, 대시, 기본 공격, 시전, 스킬 실행을 <span className="text-amber-400 font-semibold">명확히 분리</span></p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-amber-400 mt-1">✦</div>
              <p className="text-blue-200 text-sm">전투 행동을 <span className="text-amber-400 font-semibold">예측 가능하게</span> 유지</p>
            </div>
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
          <div className="w-full h-full flex flex-col items-center justify-center rounded-lg border border-blue-700 border-opacity-50 p-6"
            style={{ background: "rgba(10,20,60,0.7)" }}>
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-4">상태 전환 다이어그램</p>
            <div className="flex flex-col items-center gap-3">
              <div className="px-4 py-2 rounded border border-blue-500 text-blue-300 text-sm">Idle</div>
              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-amber-400 text-lg">↓</div>
                  <div className="px-3 py-1 rounded border border-amber-400 border-opacity-60 text-amber-300 text-xs">BasicAttack</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-amber-400 text-lg">↓</div>
                  <div className="px-3 py-1 rounded border border-green-400 border-opacity-60 text-green-300 text-xs">Dash</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-amber-400 text-lg">↓</div>
                  <div className="px-3 py-1 rounded border border-purple-400 border-opacity-60 text-purple-300 text-xs">Skill</div>
                </div>
              </div>
              <div className="text-amber-400 text-lg">↓</div>
              <div className="px-4 py-2 rounded border border-orange-500 text-orange-300 text-sm">HitReaction / Dead</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide6() {
  const flow = ["Input", "슬롯", "Skill ID", "DataAsset", "비용/쿨다운", "시전/실행", "Actor/VFX 생성", "피해 적용"];
  const skills = ["Meteor", "Ice Lance", "Thunder", "Wind", "Frost Field", "Meteor Rain"];
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-14">
        <SectionTag>스킬 시스템</SectionTag>
        <h2 className="text-4xl font-bold text-white mb-2">스킬 시스템 아키텍처</h2>
        <GoldAccent className="w-16 h-0.5 mb-6" />
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-3">스킬 실행 파이프라인</p>
            <div className="flex flex-wrap gap-1 items-center">
              {flow.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="px-2 py-1 rounded text-xs font-mono text-white border border-blue-600 border-opacity-60"
                    style={{ background: "rgba(30,60,150,0.5)" }}>
                    {step}
                  </div>
                  {i < flow.length - 1 && <span className="text-amber-400 mx-1 text-xs">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span className="text-blue-200 text-sm">스킬은 <span className="text-amber-400 font-mono">ELPlayerSkillID</span>로 식별</span></div>
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span className="text-blue-200 text-sm">스킬 슬롯과 스킬 ID 분리</span></div>
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span className="text-blue-200 text-sm"><span className="text-amber-400 font-mono">LPlayerSkillDataAsset</span>으로 데이터 관리</span></div>
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span className="text-blue-200 text-sm">시전, 쿨다운, 마나 비용, VFX, SFX, 데미지 조정 포함</span></div>
            </div>
          </div>
          <div>
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-3">구현된 스킬 목록</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <div key={i} className="px-3 py-2 rounded-full border border-amber-400 border-opacity-50 text-amber-300 text-sm font-semibold"
                  style={{ background: "rgba(40,25,0,0.5)" }}>
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-6">
             <img src="/images/VFX.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide7() {
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>UI 시스템 [상세]</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2">액션 슬롯 & 드래그-앤-드롭 UI</h2>
          <GoldAccent className="w-16 h-0.5 mb-4" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="rounded p-3 border border-blue-700 border-opacity-50" style={{ background: "rgba(10,20,60,0.7)" }}>
              <p className="text-amber-400 text-xs font-bold uppercase mb-2">슬롯 타입 구조</p>
              <div className="space-y-1 text-xs text-blue-200">
                <div><span className="text-amber-300 font-mono">ELDragPayloadType</span>: Skill / Ultimate / Item</div>
                <div><span className="text-amber-300 font-mono">ELActionSlotType</span>: 슬롯 종류 분리</div>
                <div><span className="text-amber-300 font-mono">ELActionSlotKey</span>: 슬롯 위치 관리</div>
              </div>
            </div>
            <div className="rounded p-3 border border-blue-700 border-opacity-50" style={{ background: "rgba(10,20,60,0.7)" }}>
              <p className="text-amber-400 text-xs font-bold uppercase mb-2">드래그 기능</p>
              <div className="space-y-1 text-xs text-blue-200">
                <div>스킬 창 → 액션 슬롯 드래그 할당</div>
                <div>아이템 → 퀵슬롯 할당</div>
                <div>쿨다운 레이디얼 + 텍스트 표시</div>
              </div>
            </div>
          </div>
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">이 구조의 장점</p>
          <div className="space-y-1">
            {[
              "단일 위젯 클래스로 다양한 슬롯 타입 지원",
              "드래그-앤-드롭 동작 재사용 가능",
              "UI와 게임플레이 슬롯 데이터 분리",
              "스킬/아이템 슬롯 확장 용이"
            ].map((t, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-amber-400 text-xs">✦</span>
                <span className="text-blue-200 text-xs">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-6 flex flex-col gap-3">
		<img src="/images/skill.png" alt="설명" className="w-full h-full object-cover rounded-lg" />          
          <div className="rounded p-3 border border-amber-400 border-opacity-30" style={{ background: "rgba(40,25,0,0.4)" }}>
            <p className="text-amber-400 text-xs font-bold mb-2 text-center">페이로드 다이어그램</p>
            <div className="flex items-center justify-center gap-2 text-xs text-blue-200">
              <span className="px-2 py-1 rounded bg-blue-800 text-blue-200">스킬 창</span>
              <span className="text-amber-400">→</span>
              <span className="px-2 py-1 rounded border border-amber-400 border-opacity-50 text-amber-300">Payload</span>
              <span className="text-amber-400">→</span>
              <span className="px-2 py-1 rounded bg-blue-800 text-blue-200">액션 슬롯</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide8() {
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>기술 하이라이트 [상세]</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2">데미지 인터페이스 설계</h2>
          <GoldAccent className="w-16 h-0.5 mb-5" />
          <div className="mb-5 rounded p-4 border border-blue-600 border-opacity-50" style={{ background: "rgba(10,20,60,0.7)" }}>
            <p className="text-amber-400 text-xs font-bold uppercase mb-3">ILDamageable 인터페이스</p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span>클래스 직접 의존 없이 <span className="text-amber-400 font-mono">인터페이스</span>로 데미지 처리</span></div>
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span><span className="text-amber-400 font-mono">ReceiveSkillDamage</span>: 피해량, 피해 원인자, 스킬 ID 수신</span></div>
              <div className="flex gap-3"><span className="text-amber-400">✦</span><span>보스, 테스트 박스 등 모든 액터가 동일한 데미지 흐름 공유</span></div>
            </div>
          </div>
          <div className="rounded p-4 border border-amber-400 border-opacity-30" style={{ background: "rgba(40,25,0,0.4)" }}>
            <p className="text-amber-400 text-xs font-bold uppercase mb-3">이 구조의 장점</p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex gap-3"><span className="text-green-400">▶</span><span>결합도 감소</span></div>
              <div className="flex gap-3"><span className="text-green-400">▶</span><span>전투 시스템 확장 용이</span></div>
              <div className="flex gap-3"><span className="text-green-400">▶</span><span>신규 적 추가 시 스킬 코드 수정 불필요</span></div>
            </div>
          </div>
        </div>
        <div className="w-2/5 p-8 flex flex-col items-center justify-center gap-4">
          <p className="text-blue-400 text-xs uppercase tracking-widest">인터페이스 다이어그램</p>
          <div className="w-full flex flex-col items-center gap-3">
            <div className="px-6 py-3 rounded-lg border-2 border-amber-400 border-opacity-70 text-amber-300 font-bold text-sm text-center"
              style={{ background: "rgba(40,25,0,0.5)" }}>
              Skill Actor
            </div>
            <div className="text-amber-400 text-2xl">↓</div>
            <div className="px-6 py-3 rounded-lg border-2 border-blue-400 text-blue-300 font-bold text-sm text-center"
              style={{ background: "rgba(10,30,100,0.7)" }}>
              ILDamageable
            </div>
            <div className="text-amber-400 text-2xl">↓</div>
            <div className="flex gap-4">
              {["Boss", "Enemy", "Test Target"].map((t, i) => (
                <div key={i} className="px-3 py-2 rounded border border-green-500 border-opacity-50 text-green-300 text-xs font-bold text-center"
                  style={{ background: "rgba(0,30,20,0.5)" }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide9() {
  const systems = [
    { icon: "📦", title: "LInventoryComponent", desc: "인벤토리 슬롯 관리" },
    { icon: "📋", title: "LItemDataAsset", desc: "아이템 데이터 정의 (무기/재료/소모품/재화)" },
    { icon: "💊", title: "소모품", desc: "HP 또는 마나 회복" },
    { icon: "⚡", title: "빠른 아이템 슬롯", desc: "숫자키로 포션 즉시 사용" },
    { icon: "💾", title: "SaveGame", desc: "인벤토리 슬롯 데이터 저장/불러오기" },
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>인벤토리 시스템</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2">인벤토리, 아이템, 빠른 슬롯</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="grid grid-cols-1 gap-3">
            {systems.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-blue-700 border-opacity-40"
                style={{ background: "rgba(10,20,60,0.5)" }}>
                <span className="text-2xl w-10">{s.icon}</span>
                <div>
                  <div className="text-amber-400 font-mono text-sm font-bold">{s.title}</div>
                  <div className="text-blue-200 text-xs">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
          <img src="/images/iventory.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide10() {
  const flow = ["무기 선택", "골드/재료 확인", "강화 시도", "성공/실패 결과", "무기 스탯 업데이트"];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>장비 시스템 [상세]</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2">무기 장비 및 강화 시스템</h2>
          <GoldAccent className="w-16 h-0.5 mb-5" />
          <div className="space-y-2 mb-5">
            {[
              { label: "무기 데이터", desc: "타입, 기본 공격력, 강화 레벨, 공격력 성장치" },
              { label: "강화 소모", desc: "골드, 재료 아이템, 성공 확률, 최대 레벨" },
              { label: "UI 클래스", desc: "LWeaponEnhanceWindowWidget" },
              { label: "NPC 연동", desc: "LWeaponEnhanceNpcActor → 상호작용으로 창 오픈" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 py-2 border-b border-blue-800 border-opacity-30">
                <span className="text-amber-400 font-bold text-xs w-28 shrink-0">{item.label}</span>
                <span className="text-blue-200 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="rounded p-3 border border-amber-400 border-opacity-30" style={{ background: "rgba(40,25,0,0.4)" }}>
            <p className="text-amber-400 text-xs font-bold mb-2">강화 플로우</p>
            <div className="flex flex-wrap items-center gap-1">
              {flow.map((step, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-xs text-blue-200 px-2 py-1 rounded border border-blue-600 border-opacity-40"
                    style={{ background: "rgba(15,40,100,0.5)" }}>{step}</span>
                  {i < flow.length - 1 && <span className="text-amber-400 mx-1 text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
          <img src="/images/enhanced.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide11() {
  const saves = [
    "스킬 슬롯 데이터 (LPlayerSaveGame)",
    "인벤토리 슬롯 데이터",
    "골드 보유량",
    "장착된 무기 슬롯 인덱스",
    "빠른 아이템 슬롯 아이템 ID",
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-14">
          <SectionTag>저장 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">SaveGame 영속성</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <p className="text-blue-200 text-sm mb-6">레벨 이동 또는 재시작 후에도 데이터가 유지됩니다.</p>
          <div className="space-y-3">
            {saves.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-blue-700 border-opacity-40"
                style={{ background: "rgba(10,20,60,0.5)" }}>
                <div className="w-6 h-6 rounded-full border border-amber-400 border-opacity-70 flex items-center justify-center text-amber-400 text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-blue-200 text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-8 flex flex-col items-center justify-center gap-4">
          <p className="text-blue-400 text-xs uppercase tracking-widest">저장/불러오기 다이어그램</p>
          <div className="w-full flex flex-col items-center gap-3">
            <div className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-300 font-bold text-sm text-center w-full"
              style={{ background: "rgba(10,30,100,0.7)" }}>
              Player State
            </div>
            <div className="text-amber-400 text-2xl">↓ 저장</div>
            <div className="px-6 py-3 rounded-lg border-2 border-amber-400 border-opacity-70 text-amber-300 font-bold text-sm text-center w-full"
              style={{ background: "rgba(40,25,0,0.5)" }}>
              SaveGame Object
            </div>
            <div className="text-amber-400 text-2xl">↓ BeginPlay에서 로드</div>
            <div className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-300 font-bold text-sm text-center w-full"
              style={{ background: "rgba(10,30,100,0.7)" }}>
              Player State (복원)
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide12() {
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-14">
          <SectionTag>인터랙션 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">상호작용 시스템</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="space-y-3 mb-6">
            {[
              { icon: "🔍", title: "오버랩 감지", desc: "LInteractableActor — 범위 내 플레이어 감지" },
              { icon: "💡", title: "아웃라인 표시", desc: "근접 시 상호작용 가능 객체 외곽선 활성화" },
              { icon: "🪟", title: "상호작용 위젯", desc: "상호작용 시 전용 위젯 오픈" },
              { icon: "🏰", title: "확장 구조", desc: "보스 입장, 무기 강화 NPC 등 특수 액터 상속" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-3 rounded-lg border border-blue-700 border-opacity-40"
                style={{ background: "rgba(10,20,60,0.5)" }}>
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-amber-400 font-bold text-sm">{item.title}</div>
                  <div className="text-blue-200 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-blue-200">
            <span className="px-3 py-1 rounded border border-blue-500 border-opacity-50" style={{ background: "rgba(10,30,80,0.5)" }}>플레이어 근접</span>
            <FlowArrow />
            <span className="px-3 py-1 rounded border border-blue-500 border-opacity-50" style={{ background: "rgba(10,30,80,0.5)" }}>아웃라인 표시</span>
            <FlowArrow />
            <span className="px-3 py-1 rounded border border-blue-500 border-opacity-50" style={{ background: "rgba(10,30,80,0.5)" }}>상호작용 키 입력</span>
            <FlowArrow />
            <span className="px-3 py-1 rounded border border-amber-400 border-opacity-50 text-amber-300" style={{ background: "rgba(40,25,0,0.5)" }}>위젯 오픈</span>
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
          <img src="/images/bossui.png" alt="설명" className="w-full h-full object-cover rounded-lg" />        </div>
      </div>
    </SlideLayout>
  );
}

function Slide13() {
  const components = [
    { name: "OB_BossAIController", desc: "지각, 타겟 탐색, 이동, 텔레포트 포지셔닝" },
    { name: "OB_BossFSMComponent", desc: "보스 전투 상태 관리 (FSM)" },
    { name: "OB_CombatComponent", desc: "HP, 공격, 쿨다운, 사망 처리" },
    { name: "OB_PatternComponent", desc: "공격 패턴 선택 및 실행" },
    { name: "OB_TelegraphModule", desc: "공격 경고 인디케이터 생성" },
  ];
  return (
    <SlideLayout bgImage={IMG_VILLAIN}>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>보스 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">보스 시스템 아키텍처</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="space-y-3">
            {components.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg border border-blue-700 border-opacity-50"
                style={{ background: "rgba(5,10,35,0.85)" }}>
                <div className="text-amber-400 font-bold text-xs w-6 shrink-0 mt-0.5">0{i + 1}</div>
                <div>
                  <div className="text-amber-400 font-mono text-sm font-bold">{c.name}</div>
                  <div className="text-blue-200 text-xs">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
          <img src="/images/your-screenshot.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide14() {
  const flow = ["타겟 감지", "패턴 선택", "텔레그래프 생성", "딜레이 / 경고", "공격 실행", "쿨다운", "다음 패턴 선택"];
  const patterns = ["도끼 (Axe)", "돌진 (Rush)", "내려찍기 (Slam)", "카드 (Card)"];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>보스 시스템 [상세]</SectionTag>
          <h2 className="text-3xl font-bold text-white mb-2">보스 패턴 & 텔레그래프 시스템</h2>
          <GoldAccent className="w-16 h-0.5 mb-4" />
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">보스 공격 플로우</p>
          <div className="flex flex-wrap items-center gap-1 mb-5">
            {flow.map((step, i) => (
              <div key={i} className="flex items-center">
                <span className="text-xs text-blue-200 px-2 py-1 rounded border border-blue-600 border-opacity-40"
                  style={{ background: "rgba(15,40,100,0.5)" }}>{step}</span>
                {i < flow.length - 1 && <span className="text-amber-400 mx-1 text-xs">→</span>}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-amber-400 text-xs font-bold uppercase mb-2">구현된 패턴</p>
            <div className="flex gap-2 flex-wrap">
              {patterns.map((p, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-amber-400 border-opacity-50 text-amber-300 text-xs font-semibold"
                  style={{ background: "rgba(40,25,0,0.5)" }}>{p}</span>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            {[
              "텔레그래프로 플레이어 가독성 향상",
              "패턴 컴포넌트가 공격 로직과 AI 이동 분리",
              "추후 패턴 추가 확장 용이"
            ].map((t, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-amber-400 text-xs">✦</span>
                <span className="text-blue-200 text-xs">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-6 flex flex-col gap-3">
          <img src="/images/Telegraph.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
           <img src="/images/img.jpg" alt="설명" className="w-full h-full object-cover rounded-lg" />

        </div>
      </div>
    </SlideLayout>
  );
}

function Slide15() {
  const uiClasses = [
    "플레이어 UI 위젯",
    "스킬 창 위젯",
    "인벤토리 창 위젯",
    "장비 창 위젯",
    "무기 강화 창 위젯",
    "액션 슬롯 위젯",
    "플로팅 데미지 위젯",
    "드래그 가능 창 위젯",
  ];
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-12">
          <SectionTag>UI 시스템</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">UI 시스템 전체 개요</h2>
          <GoldAccent className="w-16 h-0.5 mb-5" />
          <div className="flex flex-wrap gap-2 mb-5">
            {uiClasses.map((u, i) => (
              <div key={i} className="px-3 py-2 rounded-lg border border-blue-600 border-opacity-50 text-blue-200 text-xs"
                style={{ background: "rgba(10,25,70,0.6)" }}>
                {u}
              </div>
            ))}
          </div>
          <div className="rounded-lg p-4 border border-amber-400 border-opacity-30"
            style={{ background: "rgba(40,25,0,0.4)" }}>
            <p className="text-amber-400 font-bold text-sm mb-2">핵심 특징</p>
            <p className="text-blue-200 text-sm leading-relaxed">
              UI는 단순한 시각 요소가 아닙니다.{" "}
              <span className="text-amber-400">스킬 배정, 아이템 사용, 강화, 장비 미리보기</span>{" "}
              등 게임플레이 시스템과 직접 연결되어 있습니다.
            </p>
          </div>
        </div>
        <div className="w-2/5 p-8 flex items-center">
           <img src="/images/down.webp" alt="설명" className="w-full h-full object-cover rounded-lg" />

        </div>
      </div>
    </SlideLayout>
  );
}

function Slide16() {
  const strengths = [
    { num: "01", icon: "🔗", title: "인터페이스 기반 데미지", desc: "ILDamageable로 결합도 최소화" },
    { num: "02", icon: "📊", title: "데이터 드리븐 설계", desc: "DataAsset으로 스킬/아이템 구성" },
    { num: "03", icon: "🧩", title: "컴포넌트 기반 구조", desc: "인벤토리 및 보스 전투 로직 분리" },
    { num: "04", icon: "🖱️", title: "재사용 드래그-앤-드롭", desc: "스킬/아이템 공통 페이로드 시스템" },
    { num: "05", icon: "💾", title: "SaveGame 통합", desc: "슬롯, 인벤토리, 장비, 퀵아이템 저장" },
    { num: "06", icon: "🤖", title: "보스 AI 책임 분리", desc: "AI, FSM, 전투, 패턴, 텔레그래프 분리" },
    { num: "07", icon: "🪟", title: "UI-게임플레이 분리", desc: "위젯은 게임플레이와 명확한 역할 분리" },
  ];
  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-12 py-8">
        <div className="mb-4">
          <SectionTag>기술 분석</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">강력한 기술 구조 분석</h2>
          <GoldAccent className="w-16 h-0.5" />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-3">
          {strengths.map((s, i) => (
            <div key={i} className={`rounded-lg p-4 border border-blue-700 border-opacity-50 flex flex-col ${i === 6 ? "col-span-2" : ""}`}
              style={{ background: "rgba(10,20,60,0.65)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 font-mono text-xs font-bold">{s.num}</span>
                <span className="text-lg">{s.icon}</span>
              </div>
              <div className="text-amber-400 font-bold text-sm mb-1">{s.title}</div>
              <div className="text-blue-300 text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide17() {
  const results = [
    "쿼터뷰 액션 RPG 이동", "스킬 기반 전투", "쿨다운 및 시전",
    "드래그-앤-드롭 스킬 슬롯", "인벤토리 및 퀵 아이템", "무기 장비 및 강화",
    "보스 패턴 프로토타입", "세이브/로드 영속성",
  ];
  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-12 py-8">
        <div className="mb-5">
          <SectionTag>개발 결과</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">프로토타입 구현 결과</h2>
          <GoldAccent className="w-16 h-0.5" />
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <img src="/images/all.png" alt="설명" className="w-full h-full object-cover rounded-lg" />
                     </div>
          <div className="flex flex-col justify-center gap-2">
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded border border-green-500 border-opacity-30"
                style={{ background: "rgba(0,30,20,0.4)" }}>
                <span className="text-green-400 text-xs">✓</span>
                <span className="text-blue-200 text-xs">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide18() {
  const improvements = [
    { icon: "🎞️", text: "애니메이션 노티파이 추가 (정밀 히트 타이밍)" },
    { icon: "⚖️", text: "보스 패턴 밸런싱 개선" },
    { icon: "✨", text: "스킬 및 궁극기 연출 강화" },
    { icon: "🎁", text: "아이템 획득 및 루팅 시스템 추가" },
    { icon: "🎨", text: "UI 아트 퀄리티 향상" },
    { icon: "🔊", text: "사운드 피드백 및 카메라 쉐이크 추가" },
    { icon: "🧩", text: "플레이어 캐릭터 로직 컴포넌트 리팩토링" },
  ];
  return (
    <SlideLayout bgImage={IMG_BLUE_ABSTRACT}>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center px-14">
          <SectionTag>향후 개선 방향</SectionTag>
          <h2 className="text-4xl font-bold text-white mb-2">미래 개선 사항</h2>
          <GoldAccent className="w-16 h-0.5 mb-6" />
          <div className="space-y-3">
            {improvements.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-blue-700 border-opacity-40"
                style={{ background: "rgba(5,10,35,0.8)" }}>
                <span className="text-xl w-8 shrink-0">{item.icon}</span>
                <span className="text-blue-200 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 p-10 flex flex-col items-center justify-center">
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-6 text-center">로드맵</p>
          <div className="relative w-full">
            {["Phase 1\n전투 완성도", "Phase 2\nUI/UX 개선", "Phase 3\n콘텐츠 확장"].map((phase, i) => (
              <div key={i} className="flex gap-4 items-start mb-5">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  {i < 2 && <div className="w-0.5 h-6 bg-amber-400 opacity-30 mt-1" />}
                </div>
                <div className="text-blue-200 text-sm whitespace-pre-line">{phase}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

function Slide19() {
  return (
    <SlideLayout bgImage={IMG_WARRIOR}>
      <div className="flex flex-col items-center justify-center h-full text-center px-16">
        <SectionTag>마무리</SectionTag>
        <h2 className="text-5xl font-black text-white mb-4 leading-tight"
          style={{ textShadow: "0 0 30px rgba(251,191,36,0.3)" }}>
          프로토타입에서<br />
          <span className="text-amber-400">플레이어블 ARPG 시스템</span>으로
        </h2>
        <GoldAccent className="w-32 h-0.5 mx-auto my-6" />
        <p className="text-blue-200 text-lg leading-relaxed max-w-3xl">
          이 프로젝트는 Unreal Engine C++를 활용하여<br />
          전투, UI, 인벤토리, 장비, 강화, SaveGame, 상호작용, 보스 패턴 시스템을 결합한<br />
          <span className="text-amber-400 font-semibold">확장 가능한 액션 RPG 프로토타입</span>을 구현할 수 있음을 보여줍니다.
        </p>
        <div className="mt-10 flex gap-6">
          {["전투 시스템", "UI 아키텍처", "보스 패턴", "데이터 드리븐"].map((tag, i) => (
            <div key={i} className="px-4 py-2 rounded border border-amber-400 border-opacity-50 text-amber-300 text-sm"
              style={{ background: "rgba(40,25,0,0.5)" }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7,
  Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18, Slide19,
];

const slideTitles = [
  "타이틀", "프로젝트 개요", "게임플레이 루프", "플레이어 컨트롤",
  "상태 관리", "스킬 시스템", "드래그-앤-드롭 UI", "데미지 인터페이스",
  "인벤토리 시스템", "무기 강화", "SaveGame", "상호작용",
  "보스 아키텍처", "보스 패턴", "UI 개요", "기술 분석",
  "개발 결과", "개선 방향", "마무리",
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(TOTAL_SLIDES - 1, c + 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current];

  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div className="size-full flex flex-col" style={{ background: "#050a1e" }}>
      {/* Slide area — 16:9 */}
      <div className="flex-1 flex items-center justify-center p-4 min-h-0">
        <div
          className="relative w-full"
          style={{ maxWidth: "calc((100vh - 80px) * 16 / 9)", aspectRatio: "16/9" }}
        >
          <SlideComponent />
          <SlideNumber num={current + 1} total={TOTAL_SLIDES} />
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="shrink-0 flex items-center justify-between px-6 py-2 border-t border-blue-900"
        style={{ background: "rgba(5,10,30,0.95)" }}>
        {/* Slide thumbnails toggle */}
        <button
          onClick={() => setShowNav((v) => !v)}
          className="text-blue-400 hover:text-amber-400 text-xs transition-colors"
        >
          ☰ 슬라이드 목록
        </button>

        {/* Center: prev / current / next */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="px-4 py-1.5 rounded border border-blue-700 text-blue-300 hover:border-amber-400 hover:text-amber-400 disabled:opacity-30 transition-colors text-sm"
          >
            ← 이전
          </button>
          <span className="text-blue-400 text-xs font-mono">
            {current + 1} / {TOTAL_SLIDES}
          </span>
          <button
            onClick={next}
            disabled={current === TOTAL_SLIDES - 1}
            className="px-4 py-1.5 rounded border border-blue-700 text-blue-300 hover:border-amber-400 hover:text-amber-400 disabled:opacity-30 transition-colors text-sm"
          >
            다음 →
          </button>
        </div>

        {/* Current slide title */}
        <span className="text-blue-500 text-xs">{slideTitles[current]}</span>
      </div>

      {/* Slide drawer */}
      {showNav && (
        <div
          className="absolute bottom-12 left-0 right-0 z-50 border-t border-blue-800 overflow-x-auto"
          style={{ background: "rgba(5,10,30,0.98)" }}
        >
          <div className="flex gap-3 p-4">
            {slideTitles.map((title, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setShowNav(false); }}
                className={`shrink-0 flex flex-col items-center gap-1 rounded p-2 border transition-colors text-xs ${
                  i === current
                    ? "border-amber-400 text-amber-400"
                    : "border-blue-800 text-blue-400 hover:border-blue-500"
                }`}
                style={{ background: i === current ? "rgba(40,25,0,0.5)" : "rgba(10,20,60,0.5)", minWidth: 80 }}
              >
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-center leading-tight">{title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

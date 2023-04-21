import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerSponsorPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SponsorPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly InfantBoy?: boolean | null;
  readonly InfantGirl?: boolean | null;
  readonly InfantNoPref?: boolean | null;
  readonly InfantBoyNum?: number | null;
  readonly InfantGirlNum?: number | null;
  readonly InfantNoPrefNum?: number | null;
  readonly Sponsor?: Sponsor | null;
  readonly ElementaryBoy?: boolean | null;
  readonly ElementaryGirl?: boolean | null;
  readonly ElementaryNoPref?: boolean | null;
  readonly ElementaryBoyNum?: number | null;
  readonly ElementaryGirlNum?: number | null;
  readonly ElementaryNoPrefNum?: number | null;
  readonly MiddleSchoolBoy?: boolean | null;
  readonly MiddleSchoolGirl?: boolean | null;
  readonly MiddleSchoolNoPref?: boolean | null;
  readonly MiddleSchoolBoyNum?: number | null;
  readonly MiddleSchoolGirlNum?: number | null;
  readonly MiddleSchoolNumNoPref?: number | null;
  readonly HighSchoolBoy?: boolean | null;
  readonly HighSchoolGirl?: boolean | null;
  readonly HighSchoolNoPref?: boolean | null;
  readonly HighSchoolBoyNum?: number | null;
  readonly HighSchoolGirlNum?: number | null;
  readonly HighSchoolNoPrefNum?: number | null;
  readonly AgingOutBoy?: boolean | null;
  readonly AgingOutGirl?: boolean | null;
  readonly AgingOutNoPref?: boolean | null;
  readonly AgingOutBoyNum?: number | null;
  readonly AgingOutGirlNum?: number | null;
  readonly AgingOutNoPrefNum?: number | null;
  readonly NoPrefBoy?: boolean | null;
  readonly NoPrefGirl?: boolean | null;
  readonly NoPref?: boolean | null;
  readonly NoPrefBoyNum?: number | null;
  readonly NoPrefGirlNum?: number | null;
  readonly NoPrefNum?: number | null;
  readonly TotalNumChildren?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorPreferencesSponsorId?: string | null;
}

type LazySponsorPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SponsorPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly InfantBoy?: boolean | null;
  readonly InfantGirl?: boolean | null;
  readonly InfantNoPref?: boolean | null;
  readonly InfantBoyNum?: number | null;
  readonly InfantGirlNum?: number | null;
  readonly InfantNoPrefNum?: number | null;
  readonly Sponsor: AsyncItem<Sponsor | undefined>;
  readonly ElementaryBoy?: boolean | null;
  readonly ElementaryGirl?: boolean | null;
  readonly ElementaryNoPref?: boolean | null;
  readonly ElementaryBoyNum?: number | null;
  readonly ElementaryGirlNum?: number | null;
  readonly ElementaryNoPrefNum?: number | null;
  readonly MiddleSchoolBoy?: boolean | null;
  readonly MiddleSchoolGirl?: boolean | null;
  readonly MiddleSchoolNoPref?: boolean | null;
  readonly MiddleSchoolBoyNum?: number | null;
  readonly MiddleSchoolGirlNum?: number | null;
  readonly MiddleSchoolNumNoPref?: number | null;
  readonly HighSchoolBoy?: boolean | null;
  readonly HighSchoolGirl?: boolean | null;
  readonly HighSchoolNoPref?: boolean | null;
  readonly HighSchoolBoyNum?: number | null;
  readonly HighSchoolGirlNum?: number | null;
  readonly HighSchoolNoPrefNum?: number | null;
  readonly AgingOutBoy?: boolean | null;
  readonly AgingOutGirl?: boolean | null;
  readonly AgingOutNoPref?: boolean | null;
  readonly AgingOutBoyNum?: number | null;
  readonly AgingOutGirlNum?: number | null;
  readonly AgingOutNoPrefNum?: number | null;
  readonly NoPrefBoy?: boolean | null;
  readonly NoPrefGirl?: boolean | null;
  readonly NoPref?: boolean | null;
  readonly NoPrefBoyNum?: number | null;
  readonly NoPrefGirlNum?: number | null;
  readonly NoPrefNum?: number | null;
  readonly TotalNumChildren?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorPreferencesSponsorId?: string | null;
}

export declare type SponsorPreferences = LazyLoading extends LazyLoadingDisabled ? EagerSponsorPreferences : LazySponsorPreferences

export declare const SponsorPreferences: (new (init: ModelInit<SponsorPreferences>) => SponsorPreferences) & {
  copyOf(source: SponsorPreferences, mutator: (draft: MutableModel<SponsorPreferences>) => MutableModel<SponsorPreferences> | void): SponsorPreferences;
}

type EagerSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly PhoneNumber?: string | null;
  readonly Address?: string | null;
  readonly Address2?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Zipcode?: string | null;
  readonly ReturningSponsor?: boolean | null;
  readonly InfoChanged?: boolean | null;
  readonly SponsorChildren?: SponsorPreferences | null;
  readonly RedBagLadyPickUp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorSponsorChildrenId?: string | null;
}

type LazySponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly Email?: string | null;
  readonly PhoneNumber?: string | null;
  readonly Address?: string | null;
  readonly Address2?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly Zipcode?: string | null;
  readonly ReturningSponsor?: boolean | null;
  readonly InfoChanged?: boolean | null;
  readonly SponsorChildren: AsyncItem<SponsorPreferences | undefined>;
  readonly RedBagLadyPickUp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorSponsorChildrenId?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}
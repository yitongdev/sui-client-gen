import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V21 } from "../../constants.js";
import { PoolTokenExchangeRate } from "../../staking-pool/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorEpochInfoEventV2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::ValidatorEpochInfoEventV2`;
}

export interface ValidatorEpochInfoEventV2Fields {
  epoch: ToField<"u64">;
  validatorAddress: ToField<"address">;
  referenceGasSurveyQuote: ToField<"u64">;
  stake: ToField<"u64">;
  votingPower: ToField<"u64">;
  commissionRate: ToField<"u64">;
  poolStakingReward: ToField<"u64">;
  storageFundStakingReward: ToField<"u64">;
  poolTokenExchangeRate: ToField<PoolTokenExchangeRate>;
  tallyingRuleReporters: ToField<Vector<"address">>;
  tallyingRuleGlobalScore: ToField<"u64">;
}

export type ValidatorEpochInfoEventV2Reified = Reified<
  ValidatorEpochInfoEventV2,
  ValidatorEpochInfoEventV2Fields
>;

/**
 * Move struct: `ValidatorEpochInfoEventV2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class ValidatorEpochInfoEventV2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::ValidatorEpochInfoEventV2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorEpochInfoEventV2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEventV2`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorEpochInfoEventV2.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly validatorAddress: ToField<"address">;
  readonly referenceGasSurveyQuote: ToField<"u64">;
  readonly stake: ToField<"u64">;
  readonly votingPower: ToField<"u64">;
  readonly commissionRate: ToField<"u64">;
  readonly poolStakingReward: ToField<"u64">;
  readonly storageFundStakingReward: ToField<"u64">;
  readonly poolTokenExchangeRate: ToField<PoolTokenExchangeRate>;
  readonly tallyingRuleReporters: ToField<Vector<"address">>;
  readonly tallyingRuleGlobalScore: ToField<"u64">;

  private constructor(typeArgs: [], fields: ValidatorEpochInfoEventV2Fields) {
    this.$fullTypeName = composeSuiType(
      ValidatorEpochInfoEventV2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEventV2`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.validatorAddress = fields.validatorAddress;
    this.referenceGasSurveyQuote = fields.referenceGasSurveyQuote;
    this.stake = fields.stake;
    this.votingPower = fields.votingPower;
    this.commissionRate = fields.commissionRate;
    this.poolStakingReward = fields.poolStakingReward;
    this.storageFundStakingReward = fields.storageFundStakingReward;
    this.poolTokenExchangeRate = fields.poolTokenExchangeRate;
    this.tallyingRuleReporters = fields.tallyingRuleReporters;
    this.tallyingRuleGlobalScore = fields.tallyingRuleGlobalScore;
  }

  static reified(): ValidatorEpochInfoEventV2Reified {
    return {
      typeName: ValidatorEpochInfoEventV2.$typeName,
      fullTypeName: composeSuiType(
        ValidatorEpochInfoEventV2.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEventV2`,
      typeArgs: [] as [],
      isPhantom: ValidatorEpochInfoEventV2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ValidatorEpochInfoEventV2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ValidatorEpochInfoEventV2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorEpochInfoEventV2.fromBcs(data),
      bcs: ValidatorEpochInfoEventV2.bcs,
      fromJSONField: (field: any) =>
        ValidatorEpochInfoEventV2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        ValidatorEpochInfoEventV2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ValidatorEpochInfoEventV2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ValidatorEpochInfoEventV2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ValidatorEpochInfoEventV2.fetch(client, id),
      new: (fields: ValidatorEpochInfoEventV2Fields) => {
        return new ValidatorEpochInfoEventV2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorEpochInfoEventV2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorEpochInfoEventV2>> {
    return phantom(ValidatorEpochInfoEventV2.reified());
  }
  static get p() {
    return ValidatorEpochInfoEventV2.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorEpochInfoEventV2", {
      epoch: bcs.u64(),
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      reference_gas_survey_quote: bcs.u64(),
      stake: bcs.u64(),
      voting_power: bcs.u64(),
      commission_rate: bcs.u64(),
      pool_staking_reward: bcs.u64(),
      storage_fund_staking_reward: bcs.u64(),
      pool_token_exchange_rate: PoolTokenExchangeRate.bcs,
      tallying_rule_reporters: bcs.vector(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
      ),
      tallying_rule_global_score: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorEpochInfoEventV2 {
    return ValidatorEpochInfoEventV2.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      referenceGasSurveyQuote: decodeFromFields(
        "u64",
        fields.reference_gas_survey_quote,
      ),
      stake: decodeFromFields("u64", fields.stake),
      votingPower: decodeFromFields("u64", fields.voting_power),
      commissionRate: decodeFromFields("u64", fields.commission_rate),
      poolStakingReward: decodeFromFields("u64", fields.pool_staking_reward),
      storageFundStakingReward: decodeFromFields(
        "u64",
        fields.storage_fund_staking_reward,
      ),
      poolTokenExchangeRate: decodeFromFields(
        PoolTokenExchangeRate.reified(),
        fields.pool_token_exchange_rate,
      ),
      tallyingRuleReporters: decodeFromFields(
        reified.vector("address"),
        fields.tallying_rule_reporters,
      ),
      tallyingRuleGlobalScore: decodeFromFields(
        "u64",
        fields.tallying_rule_global_score,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorEpochInfoEventV2 {
    if (!isValidatorEpochInfoEventV2(item.type)) {
      throw new Error("not a ValidatorEpochInfoEventV2 type");
    }

    return ValidatorEpochInfoEventV2.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      validatorAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.validator_address,
      ),
      referenceGasSurveyQuote: decodeFromFieldsWithTypes(
        "u64",
        item.fields.reference_gas_survey_quote,
      ),
      stake: decodeFromFieldsWithTypes("u64", item.fields.stake),
      votingPower: decodeFromFieldsWithTypes("u64", item.fields.voting_power),
      commissionRate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.commission_rate,
      ),
      poolStakingReward: decodeFromFieldsWithTypes(
        "u64",
        item.fields.pool_staking_reward,
      ),
      storageFundStakingReward: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_fund_staking_reward,
      ),
      poolTokenExchangeRate: decodeFromFieldsWithTypes(
        PoolTokenExchangeRate.reified(),
        item.fields.pool_token_exchange_rate,
      ),
      tallyingRuleReporters: decodeFromFieldsWithTypes(
        reified.vector("address"),
        item.fields.tallying_rule_reporters,
      ),
      tallyingRuleGlobalScore: decodeFromFieldsWithTypes(
        "u64",
        item.fields.tallying_rule_global_score,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorEpochInfoEventV2 {
    return ValidatorEpochInfoEventV2.fromFields(
      ValidatorEpochInfoEventV2.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      validatorAddress: this.validatorAddress,
      referenceGasSurveyQuote: this.referenceGasSurveyQuote.toString(),
      stake: this.stake.toString(),
      votingPower: this.votingPower.toString(),
      commissionRate: this.commissionRate.toString(),
      poolStakingReward: this.poolStakingReward.toString(),
      storageFundStakingReward: this.storageFundStakingReward.toString(),
      poolTokenExchangeRate: this.poolTokenExchangeRate.toJSONField(),
      tallyingRuleReporters: fieldToJSON<Vector<"address">>(
        `vector<address>`,
        this.tallyingRuleReporters,
      ),
      tallyingRuleGlobalScore: this.tallyingRuleGlobalScore.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ValidatorEpochInfoEventV2 {
    return ValidatorEpochInfoEventV2.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      referenceGasSurveyQuote: decodeFromJSONField(
        "u64",
        field.referenceGasSurveyQuote,
      ),
      stake: decodeFromJSONField("u64", field.stake),
      votingPower: decodeFromJSONField("u64", field.votingPower),
      commissionRate: decodeFromJSONField("u64", field.commissionRate),
      poolStakingReward: decodeFromJSONField("u64", field.poolStakingReward),
      storageFundStakingReward: decodeFromJSONField(
        "u64",
        field.storageFundStakingReward,
      ),
      poolTokenExchangeRate: decodeFromJSONField(
        PoolTokenExchangeRate.reified(),
        field.poolTokenExchangeRate,
      ),
      tallyingRuleReporters: decodeFromJSONField(
        reified.vector("address"),
        field.tallyingRuleReporters,
      ),
      tallyingRuleGlobalScore: decodeFromJSONField(
        "u64",
        field.tallyingRuleGlobalScore,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorEpochInfoEventV2 {
    if (json.$typeName !== ValidatorEpochInfoEventV2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorEpochInfoEventV2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorEpochInfoEventV2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorEpochInfoEventV2(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ValidatorEpochInfoEventV2 object`,
      );
    }
    return ValidatorEpochInfoEventV2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorEpochInfoEventV2 {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isValidatorEpochInfoEventV2(data.bcs.type)
      ) {
        throw new Error(`object at is not a ValidatorEpochInfoEventV2 object`);
      }

      return ValidatorEpochInfoEventV2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorEpochInfoEventV2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<ValidatorEpochInfoEventV2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ValidatorEpochInfoEventV2 object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isValidatorEpochInfoEventV2(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a ValidatorEpochInfoEventV2 object`,
      );
    }

    return ValidatorEpochInfoEventV2.fromSuiObjectData(res.data);
  }
}

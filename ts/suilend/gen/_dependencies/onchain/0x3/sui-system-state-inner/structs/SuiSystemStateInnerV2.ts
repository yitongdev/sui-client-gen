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
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Bag } from "../../../0x2/bag/structs/index.js";
import { Balance } from "../../../0x2/balance/structs/index.js";
import { SUI } from "../../../0x2/sui/structs/index.js";
import { VecMap } from "../../../0x2/vec-map/structs/index.js";
import { VecSet } from "../../../0x2/vec-set/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { StakeSubsidy } from "../../stake-subsidy/structs/index.js";
import { StorageFund } from "../../storage-fund/structs/index.js";
import { ValidatorSet } from "../../validator-set/structs/index.js";
import { SystemParametersV2 as SystemParametersV21 } from "./SystemParametersV2.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isSuiSystemStateInnerV2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::sui_system_state_inner::SuiSystemStateInnerV2`;
}

export interface SuiSystemStateInnerV2Fields {
  epoch: ToField<"u64">;
  protocolVersion: ToField<"u64">;
  systemStateVersion: ToField<"u64">;
  validators: ToField<ValidatorSet>;
  storageFund: ToField<StorageFund>;
  parameters: ToField<SystemParametersV21>;
  referenceGasPrice: ToField<"u64">;
  validatorReportRecords: ToField<VecMap<"address", VecSet<"address">>>;
  stakeSubsidy: ToField<StakeSubsidy>;
  safeMode: ToField<"bool">;
  safeModeStorageRewards: ToField<Balance<ToPhantom<SUI>>>;
  safeModeComputationRewards: ToField<Balance<ToPhantom<SUI>>>;
  safeModeStorageRebates: ToField<"u64">;
  safeModeNonRefundableStorageFee: ToField<"u64">;
  epochStartTimestampMs: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type SuiSystemStateInnerV2Reified = Reified<
  SuiSystemStateInnerV2,
  SuiSystemStateInnerV2Fields
>;

/**
 * Move struct: `SuiSystemStateInnerV2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::sui_system_state_inner`
 */
export class SuiSystemStateInnerV2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::sui_system_state_inner::SuiSystemStateInnerV2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SuiSystemStateInnerV2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::sui_system_state_inner::SuiSystemStateInnerV2`;
  readonly $typeArgs: [];
  readonly $isPhantom = SuiSystemStateInnerV2.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly protocolVersion: ToField<"u64">;
  readonly systemStateVersion: ToField<"u64">;
  readonly validators: ToField<ValidatorSet>;
  readonly storageFund: ToField<StorageFund>;
  readonly parameters: ToField<SystemParametersV21>;
  readonly referenceGasPrice: ToField<"u64">;
  readonly validatorReportRecords: ToField<
    VecMap<"address", VecSet<"address">>
  >;
  readonly stakeSubsidy: ToField<StakeSubsidy>;
  readonly safeMode: ToField<"bool">;
  readonly safeModeStorageRewards: ToField<Balance<ToPhantom<SUI>>>;
  readonly safeModeComputationRewards: ToField<Balance<ToPhantom<SUI>>>;
  readonly safeModeStorageRebates: ToField<"u64">;
  readonly safeModeNonRefundableStorageFee: ToField<"u64">;
  readonly epochStartTimestampMs: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: SuiSystemStateInnerV2Fields) {
    this.$fullTypeName = composeSuiType(
      SuiSystemStateInnerV2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::sui_system_state_inner::SuiSystemStateInnerV2`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.protocolVersion = fields.protocolVersion;
    this.systemStateVersion = fields.systemStateVersion;
    this.validators = fields.validators;
    this.storageFund = fields.storageFund;
    this.parameters = fields.parameters;
    this.referenceGasPrice = fields.referenceGasPrice;
    this.validatorReportRecords = fields.validatorReportRecords;
    this.stakeSubsidy = fields.stakeSubsidy;
    this.safeMode = fields.safeMode;
    this.safeModeStorageRewards = fields.safeModeStorageRewards;
    this.safeModeComputationRewards = fields.safeModeComputationRewards;
    this.safeModeStorageRebates = fields.safeModeStorageRebates;
    this.safeModeNonRefundableStorageFee =
      fields.safeModeNonRefundableStorageFee;
    this.epochStartTimestampMs = fields.epochStartTimestampMs;
    this.extraFields = fields.extraFields;
  }

  static reified(): SuiSystemStateInnerV2Reified {
    return {
      typeName: SuiSystemStateInnerV2.$typeName,
      fullTypeName: composeSuiType(
        SuiSystemStateInnerV2.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::sui_system_state_inner::SuiSystemStateInnerV2`,
      typeArgs: [] as [],
      isPhantom: SuiSystemStateInnerV2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        SuiSystemStateInnerV2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SuiSystemStateInnerV2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SuiSystemStateInnerV2.fromBcs(data),
      bcs: SuiSystemStateInnerV2.bcs,
      fromJSONField: (field: any) => SuiSystemStateInnerV2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        SuiSystemStateInnerV2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SuiSystemStateInnerV2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SuiSystemStateInnerV2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        SuiSystemStateInnerV2.fetch(client, id),
      new: (fields: SuiSystemStateInnerV2Fields) => {
        return new SuiSystemStateInnerV2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SuiSystemStateInnerV2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SuiSystemStateInnerV2>> {
    return phantom(SuiSystemStateInnerV2.reified());
  }
  static get p() {
    return SuiSystemStateInnerV2.phantom();
  }

  static get bcs() {
    return bcs.struct("SuiSystemStateInnerV2", {
      epoch: bcs.u64(),
      protocol_version: bcs.u64(),
      system_state_version: bcs.u64(),
      validators: ValidatorSet.bcs,
      storage_fund: StorageFund.bcs,
      parameters: SystemParametersV21.bcs,
      reference_gas_price: bcs.u64(),
      validator_report_records: VecMap.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        VecSet.bcs(
          bcs.bytes(32).transform({
            input: (val: string) => fromHex(val),
            output: (val: Uint8Array) => toHex(val),
          }),
        ),
      ),
      stake_subsidy: StakeSubsidy.bcs,
      safe_mode: bcs.bool(),
      safe_mode_storage_rewards: Balance.bcs,
      safe_mode_computation_rewards: Balance.bcs,
      safe_mode_storage_rebates: bcs.u64(),
      safe_mode_non_refundable_storage_fee: bcs.u64(),
      epoch_start_timestamp_ms: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): SuiSystemStateInnerV2 {
    return SuiSystemStateInnerV2.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      protocolVersion: decodeFromFields("u64", fields.protocol_version),
      systemStateVersion: decodeFromFields("u64", fields.system_state_version),
      validators: decodeFromFields(ValidatorSet.reified(), fields.validators),
      storageFund: decodeFromFields(StorageFund.reified(), fields.storage_fund),
      parameters: decodeFromFields(
        SystemParametersV21.reified(),
        fields.parameters,
      ),
      referenceGasPrice: decodeFromFields("u64", fields.reference_gas_price),
      validatorReportRecords: decodeFromFields(
        VecMap.reified("address", VecSet.reified("address")),
        fields.validator_report_records,
      ),
      stakeSubsidy: decodeFromFields(
        StakeSubsidy.reified(),
        fields.stake_subsidy,
      ),
      safeMode: decodeFromFields("bool", fields.safe_mode),
      safeModeStorageRewards: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.safe_mode_storage_rewards,
      ),
      safeModeComputationRewards: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.safe_mode_computation_rewards,
      ),
      safeModeStorageRebates: decodeFromFields(
        "u64",
        fields.safe_mode_storage_rebates,
      ),
      safeModeNonRefundableStorageFee: decodeFromFields(
        "u64",
        fields.safe_mode_non_refundable_storage_fee,
      ),
      epochStartTimestampMs: decodeFromFields(
        "u64",
        fields.epoch_start_timestamp_ms,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SuiSystemStateInnerV2 {
    if (!isSuiSystemStateInnerV2(item.type)) {
      throw new Error("not a SuiSystemStateInnerV2 type");
    }

    return SuiSystemStateInnerV2.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      protocolVersion: decodeFromFieldsWithTypes(
        "u64",
        item.fields.protocol_version,
      ),
      systemStateVersion: decodeFromFieldsWithTypes(
        "u64",
        item.fields.system_state_version,
      ),
      validators: decodeFromFieldsWithTypes(
        ValidatorSet.reified(),
        item.fields.validators,
      ),
      storageFund: decodeFromFieldsWithTypes(
        StorageFund.reified(),
        item.fields.storage_fund,
      ),
      parameters: decodeFromFieldsWithTypes(
        SystemParametersV21.reified(),
        item.fields.parameters,
      ),
      referenceGasPrice: decodeFromFieldsWithTypes(
        "u64",
        item.fields.reference_gas_price,
      ),
      validatorReportRecords: decodeFromFieldsWithTypes(
        VecMap.reified("address", VecSet.reified("address")),
        item.fields.validator_report_records,
      ),
      stakeSubsidy: decodeFromFieldsWithTypes(
        StakeSubsidy.reified(),
        item.fields.stake_subsidy,
      ),
      safeMode: decodeFromFieldsWithTypes("bool", item.fields.safe_mode),
      safeModeStorageRewards: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.safe_mode_storage_rewards,
      ),
      safeModeComputationRewards: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.safe_mode_computation_rewards,
      ),
      safeModeStorageRebates: decodeFromFieldsWithTypes(
        "u64",
        item.fields.safe_mode_storage_rebates,
      ),
      safeModeNonRefundableStorageFee: decodeFromFieldsWithTypes(
        "u64",
        item.fields.safe_mode_non_refundable_storage_fee,
      ),
      epochStartTimestampMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.epoch_start_timestamp_ms,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs(data: Uint8Array): SuiSystemStateInnerV2 {
    return SuiSystemStateInnerV2.fromFields(
      SuiSystemStateInnerV2.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      protocolVersion: this.protocolVersion.toString(),
      systemStateVersion: this.systemStateVersion.toString(),
      validators: this.validators.toJSONField(),
      storageFund: this.storageFund.toJSONField(),
      parameters: this.parameters.toJSONField(),
      referenceGasPrice: this.referenceGasPrice.toString(),
      validatorReportRecords: this.validatorReportRecords.toJSONField(),
      stakeSubsidy: this.stakeSubsidy.toJSONField(),
      safeMode: this.safeMode,
      safeModeStorageRewards: this.safeModeStorageRewards.toJSONField(),
      safeModeComputationRewards: this.safeModeComputationRewards.toJSONField(),
      safeModeStorageRebates: this.safeModeStorageRebates.toString(),
      safeModeNonRefundableStorageFee:
        this.safeModeNonRefundableStorageFee.toString(),
      epochStartTimestampMs: this.epochStartTimestampMs.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): SuiSystemStateInnerV2 {
    return SuiSystemStateInnerV2.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      protocolVersion: decodeFromJSONField("u64", field.protocolVersion),
      systemStateVersion: decodeFromJSONField("u64", field.systemStateVersion),
      validators: decodeFromJSONField(ValidatorSet.reified(), field.validators),
      storageFund: decodeFromJSONField(
        StorageFund.reified(),
        field.storageFund,
      ),
      parameters: decodeFromJSONField(
        SystemParametersV21.reified(),
        field.parameters,
      ),
      referenceGasPrice: decodeFromJSONField("u64", field.referenceGasPrice),
      validatorReportRecords: decodeFromJSONField(
        VecMap.reified("address", VecSet.reified("address")),
        field.validatorReportRecords,
      ),
      stakeSubsidy: decodeFromJSONField(
        StakeSubsidy.reified(),
        field.stakeSubsidy,
      ),
      safeMode: decodeFromJSONField("bool", field.safeMode),
      safeModeStorageRewards: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.safeModeStorageRewards,
      ),
      safeModeComputationRewards: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.safeModeComputationRewards,
      ),
      safeModeStorageRebates: decodeFromJSONField(
        "u64",
        field.safeModeStorageRebates,
      ),
      safeModeNonRefundableStorageFee: decodeFromJSONField(
        "u64",
        field.safeModeNonRefundableStorageFee,
      ),
      epochStartTimestampMs: decodeFromJSONField(
        "u64",
        field.epochStartTimestampMs,
      ),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): SuiSystemStateInnerV2 {
    if (json.$typeName !== SuiSystemStateInnerV2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SuiSystemStateInnerV2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SuiSystemStateInnerV2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSuiSystemStateInnerV2(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SuiSystemStateInnerV2 object`,
      );
    }
    return SuiSystemStateInnerV2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SuiSystemStateInnerV2 {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isSuiSystemStateInnerV2(data.bcs.type)
      ) {
        throw new Error(`object at is not a SuiSystemStateInnerV2 object`);
      }

      return SuiSystemStateInnerV2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SuiSystemStateInnerV2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<SuiSystemStateInnerV2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SuiSystemStateInnerV2 object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSuiSystemStateInnerV2(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a SuiSystemStateInnerV2 object`,
      );
    }

    return SuiSystemStateInnerV2.fromSuiObjectData(res.data);
  }
}

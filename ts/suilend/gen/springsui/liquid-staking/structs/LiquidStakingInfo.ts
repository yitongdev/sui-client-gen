import * as reified from "../../../_framework/reified.js";
import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { Balance } from "../../../_dependencies/onchain/0x2/balance/structs/index.js";
import { TreasuryCap } from "../../../_dependencies/onchain/0x2/coin/structs/index.js";
import { UID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { SUI } from "../../../_dependencies/onchain/0x2/sui/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Cell } from "../../cell/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { FeeConfig } from "../../fees/structs/index.js";
import { Storage } from "../../storage/structs/index.js";
import { Version } from "../../version/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLiquidStakingInfo(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::liquid_staking::LiquidStakingInfo` + "<");
}

export interface LiquidStakingInfoFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  lstTreasuryCap: ToField<TreasuryCap<T0>>;
  feeConfig: ToField<Cell<FeeConfig>>;
  fees: ToField<Balance<ToPhantom<SUI>>>;
  accruedSpreadFees: ToField<"u64">;
  storage: ToField<Storage>;
  version: ToField<Version>;
  extraFields: ToField<Bag>;
}

export type LiquidStakingInfoReified<T0 extends PhantomTypeArgument> = Reified<
  LiquidStakingInfo<T0>,
  LiquidStakingInfoFields<T0>
>;

/**
 * Move struct: `LiquidStakingInfo`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class LiquidStakingInfo<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::LiquidStakingInfo`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = LiquidStakingInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::LiquidStakingInfo<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = LiquidStakingInfo.$isPhantom;

  readonly id: ToField<UID>;
  readonly lstTreasuryCap: ToField<TreasuryCap<T0>>;
  readonly feeConfig: ToField<Cell<FeeConfig>>;
  readonly fees: ToField<Balance<ToPhantom<SUI>>>;
  readonly accruedSpreadFees: ToField<"u64">;
  readonly storage: ToField<Storage>;
  readonly version: ToField<Version>;
  readonly extraFields: ToField<Bag>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: LiquidStakingInfoFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      LiquidStakingInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::LiquidStakingInfo<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.lstTreasuryCap = fields.lstTreasuryCap;
    this.feeConfig = fields.feeConfig;
    this.fees = fields.fees;
    this.accruedSpreadFees = fields.accruedSpreadFees;
    this.storage = fields.storage;
    this.version = fields.version;
    this.extraFields = fields.extraFields;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): LiquidStakingInfoReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: LiquidStakingInfo.$typeName,
      fullTypeName: composeSuiType(
        LiquidStakingInfo.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::liquid_staking::LiquidStakingInfo<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: LiquidStakingInfo.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        LiquidStakingInfo.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LiquidStakingInfo.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => LiquidStakingInfo.fromBcs(T0, data),
      bcs: LiquidStakingInfo.bcs,
      fromJSONField: (field: any) => LiquidStakingInfo.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        LiquidStakingInfo.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LiquidStakingInfo.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LiquidStakingInfo.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        LiquidStakingInfo.fetch(client, T0, id),
      new: (fields: LiquidStakingInfoFields<ToPhantomTypeArgument<T0>>) => {
        return new LiquidStakingInfo([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LiquidStakingInfo.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<LiquidStakingInfo<ToPhantomTypeArgument<T0>>>> {
    return phantom(LiquidStakingInfo.reified(T0));
  }
  static get p() {
    return LiquidStakingInfo.phantom;
  }

  static get bcs() {
    return bcs.struct("LiquidStakingInfo", {
      id: UID.bcs,
      lst_treasury_cap: TreasuryCap.bcs,
      fee_config: Cell.bcs(FeeConfig.bcs),
      fees: Balance.bcs,
      accrued_spread_fees: bcs.u64(),
      storage: Storage.bcs,
      version: Version.bcs,
      extra_fields: Bag.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    return LiquidStakingInfo.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      lstTreasuryCap: decodeFromFields(
        TreasuryCap.reified(typeArg),
        fields.lst_treasury_cap,
      ),
      feeConfig: decodeFromFields(
        Cell.reified(FeeConfig.reified()),
        fields.fee_config,
      ),
      fees: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.fees,
      ),
      accruedSpreadFees: decodeFromFields("u64", fields.accrued_spread_fees),
      storage: decodeFromFields(Storage.reified(), fields.storage),
      version: decodeFromFields(Version.reified(), fields.version),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    if (!isLiquidStakingInfo(item.type)) {
      throw new Error("not a LiquidStakingInfo type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return LiquidStakingInfo.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      lstTreasuryCap: decodeFromFieldsWithTypes(
        TreasuryCap.reified(typeArg),
        item.fields.lst_treasury_cap,
      ),
      feeConfig: decodeFromFieldsWithTypes(
        Cell.reified(FeeConfig.reified()),
        item.fields.fee_config,
      ),
      fees: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.fees,
      ),
      accruedSpreadFees: decodeFromFieldsWithTypes(
        "u64",
        item.fields.accrued_spread_fees,
      ),
      storage: decodeFromFieldsWithTypes(
        Storage.reified(),
        item.fields.storage,
      ),
      version: decodeFromFieldsWithTypes(
        Version.reified(),
        item.fields.version,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    return LiquidStakingInfo.fromFields(
      typeArg,
      LiquidStakingInfo.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      lstTreasuryCap: this.lstTreasuryCap.toJSONField(),
      feeConfig: this.feeConfig.toJSONField(),
      fees: this.fees.toJSONField(),
      accruedSpreadFees: this.accruedSpreadFees.toString(),
      storage: this.storage.toJSONField(),
      version: this.version.toJSONField(),
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

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    return LiquidStakingInfo.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      lstTreasuryCap: decodeFromJSONField(
        TreasuryCap.reified(typeArg),
        field.lstTreasuryCap,
      ),
      feeConfig: decodeFromJSONField(
        Cell.reified(FeeConfig.reified()),
        field.feeConfig,
      ),
      fees: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.fees,
      ),
      accruedSpreadFees: decodeFromJSONField("u64", field.accruedSpreadFees),
      storage: decodeFromJSONField(Storage.reified(), field.storage),
      version: decodeFromJSONField(Version.reified(), field.version),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== LiquidStakingInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(LiquidStakingInfo.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return LiquidStakingInfo.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLiquidStakingInfo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LiquidStakingInfo object`,
      );
    }
    return LiquidStakingInfo.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): LiquidStakingInfo<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isLiquidStakingInfo(data.bcs.type)
      ) {
        throw new Error(`object at is not a LiquidStakingInfo object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return LiquidStakingInfo.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return LiquidStakingInfo.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<LiquidStakingInfo<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LiquidStakingInfo object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLiquidStakingInfo(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a LiquidStakingInfo object`);
    }

    return LiquidStakingInfo.fromSuiObjectData(typeArg, res.data);
  }
}
